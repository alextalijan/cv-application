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
  })

  function handleSubmit(e) {
    e.preventDefault();

    const newInfo = { 
      name: e.target.elements["name"].value,
      email: e.target.elements["email"].value,
      phone: e.target.elements["phone"].value,
      school: e.target.elements["school"].value,
      studyTitle: e.target.elements["studyTitle"].value,
      graduationDate: e.target.elements["graduationDate"].value,
    }
    setInfo(newInfo);

    return (
      <CV info={newInfo} />
    )
  }

  function addJob() {
    setInfo({ ...info, jobs: [...info.jobs, { id: crypto.randomUUID(), company: '', position: '', responsibilities: '', fromDate: '', toDate: '' }] });
  }

  function deleteJob(id) {
    setInfo({ ...info, jobs: info.jobs.filter(job => job.id !== id) });
  }

  return (
    <form action="">
      <div className='cv-paper'>
        <GeneralSection info={{ name: info.name, email: info.email, phone: info.phone }} className="section" />
        <hr className='section-break' />
        <EducationalSection schoolInfo={{school: info.school, studyTitle: info.studyTitle, graduationDate: info.graduationDate}} className="section"/>
        <hr className='section-break' />
        <ExperienceSection jobs={info.jobs} addJob={addJob} deleteJob={deleteJob} className="section" />
      </div>
      <button className='submitCV-btn' type='submit' onSubmit={handleSubmit}>Submit CV</button>
    </form>
  );
}

export default CvForm;