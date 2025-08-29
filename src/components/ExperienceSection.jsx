import Job from './Job.jsx';
import { useState } from 'react';

function ExperienceSection() {
  const [jobs, setJobs] = useState([]);

  function deleteJob(jobId) {
    setJobs(jobs.filter(job => job.id !== jobId));
  }

  return (
    <div className='jobsList'>
     <h2 className='section-heading'>Experience</h2>
     {jobs.map((job) => {
      return (
        <Job key={job.id} companyName={job.companyName} position={job.position} responsibilities={job.responsibilities} fromDate={job.fromDate}  toDate={job.toDate} handleDelete={() => deleteJob(job.id)} />
      )
     })}
     <button className='add-job-btn' onClick={() => setJobs([...jobs, { id: crypto.randomUUID(), companyName: '', position: '', responsibilities: '', fromDate: '', toDate: '' }])}>Add Job</button>
    </div>
  );
}

export default ExperienceSection;