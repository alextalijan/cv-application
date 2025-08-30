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

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditMode();
  }

  function addJob() {
    setInfo({ ...info, jobs: [...info.jobs, { id: crypto.randomUUID(), company: '', position: '', responsibilities: '', fromDate: '', toDate: '' }] });
  }

  function deleteJob(id) {
    setInfo({ ...info, jobs: info.jobs.filter(job => job.id !== id) });
  }

  function handleChange(inputName, value) {
    setInfo({ ...info, [inputName]: value});
  }

  function handleJobChange(id, inputName, value) {
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