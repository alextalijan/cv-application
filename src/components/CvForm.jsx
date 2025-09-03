import { useState } from 'react';
import GeneralSection from './GeneralSection.jsx';
import EducationalSection from './EducationalSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import CV from './CV.jsx';

function CvForm() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    studyTitle: '',
    graduationDate: '',
    jobs: [],
  });
  const [editMode, setEditMode] = useState(true);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function showError(inputName, message, id = null) {
    // If an id is provided, make sure the right job field is selected
    let input;
    if (id !== null) {
      input = document.querySelector(`.input-field[name="${inputName}"][data-id="${id}"]`);
    } else {
      input = document.querySelector(`.input-field[name="${inputName}"]`);
    }

    input.classList.add('input-error');

    // If the input type contains a placeholder, show the message
    if ('name' in input) {
      input.placeholder = message;
    }
  }

  function validateErrors() {
    let errors = 0;

    if (info.name === '') {
      showError('name', 'Please input your name.');
      errors += 1;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(info.email)) {
      showError('email', 'Follow the format: example@example.com');
      errors += 1;
    }

    if (info.school === '') {
      showError('school', 'Please input the last school you attended.');
      errors += 1;
    }

    if (info.graduationDate === '' || new Date(info.graduationDate) > new Date()) {
      showError('graduationDate', 'Please select a valid graduation date.');
      errors += 1;
    }

    if (info.jobs.length > 0) {
      info.jobs.forEach(job => {
        if (job.company === '') {
          showError('company', 'You must include the company name.', job.id);
          errors += 1;
        }

        if (job.responsibilities === '') {
          showError('responsibilities', 'Please describe what you have done at this job.', job.id);
          errors += 1;
        }

        const workedFrom = new Date(job.workedFrom);
        const workedUntil = new Date(job.workedUntil);
        if (workedFrom >= workedUntil) {
          showError('workedFrom', "You couldn't have started working before you ended.", job.id);
          errors += 1;
        }
      });
    }

    if (errors > 0) {
      const firstInvalidInput = document.querySelector('.input-error');
      firstInvalidInput.scrollIntoView({
          behavior: 'smooth', // For smooth scrolling animation
          block: 'center' // Adjust alignment (e.g., 'start', 'end', 'nearest')
      });

      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateErrors();

    // Make sure all required fields have been inputed
    if (validateErrors()) {
      toggleEditMode();
    }
  }

  function addJob() {
    setInfo({ ...info, jobs: [...info.jobs, { id: crypto.randomUUID(), company: '', position: '', responsibilities: '', workedFrom: '', workedUntil: '' }] });
  }

  function deleteJob(id) {
    setInfo({ ...info, jobs: info.jobs.filter(job => job.id !== id) });
  }

  function handleChange(inputName, value) {
    const input = document.querySelector(`.input-field[name=${inputName}]`);
    if (input.classList.contains('input-error')) {
      input.classList.remove('input-error');
    }

    setInfo({ ...info, [inputName]: value});
  }

  function handleJobChange(id, inputName, value) {
    const input = document.querySelector(`.input-field[name='${inputName}'][data-id='${id}']`);
    if (input.classList.contains('input-error')) {
      input.classList.remove('input-error');
    }

    setInfo({ ...info, jobs: info.jobs.map(job => {
      if (job.id === id) {
        return { ...job, [inputName]: value}
      }

      return job;
    })})
  }

  return (
    <>
      {editMode === true ? (
          <form action="" onSubmit={handleSubmit}>
            <div className='cv-paper'>
              <GeneralSection info={{ name: info.name, email: info.email, phone: info.phone }} className="section" handleChange={handleChange} />
              <hr className='section-break' />
              <EducationalSection schoolInfo={{school: info.school, studyTitle: info.studyTitle, graduationDate: info.graduationDate}} className="section" handleChange={handleChange} />
              <hr className='section-break' />
              <ExperienceSection jobs={info.jobs} addJob={addJob} deleteJob={deleteJob} className="section" handleJobChange={handleJobChange} />
            </div>
            <button className='submitCV-btn' type='submit'>Submit CV</button>
          </form>
        ) : (
          <CV info={info} toggleEditMode={toggleEditMode} />
        )
      };
    </>
  );
}

export default CvForm;