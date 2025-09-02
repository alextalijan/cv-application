import Job from './Job.jsx';

function ExperienceSection({ jobs, addJob, deleteJob, handleJobChange }) {
  return (
    <div className='jobs-list'>
     <h2 className='section-heading'>Experience</h2>
     {jobs.map((job) => {
      return (
        <Job key={job.id} id={job.id} company={job.company} position={job.position} responsibilities={job.responsibilities} workedFrom={job.workedFrom} workedUntil={job.workedUntil} handleDelete={() => deleteJob(job.id)} handleJobChange={handleJobChange} />
      )
     })}
     <button className='add-job-btn' type='button' onClick={addJob}>Add Job</button>
    </div>
  );
}

export default ExperienceSection;