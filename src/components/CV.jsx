function CV({ info, toggleEditMode }) {
  return (
    <div className="finished-cv">
      <button className="edit-cv-btn" onClick={toggleEditMode} type="button">EDIT</button>
      <section className="finished-cv-section">
        <h2>General</h2>
        <p>Name: {info.name || 'Not known'}</p>
        <p>Email: {info.email || 'Not provided'}</p>
        <p>Phone Number: {info.phone || 'Not provided'}</p>
      </section>
      <section className="finished-cv-section">
        <h2>Education</h2>
        <p>School Name: {info.school || 'None'}</p>
        {info.school !== ''
          && <>
              <p>Study Title: {info.studyTitle || 'None'}</p>
              <p>Graduation Date: {info.graduationDate || 'None'}</p>
            </>}
      </section>
      <section className="finished-cv-section">
        <h2>Experience</h2>
        {info.jobs.length > 0
          ? info.jobs.map(job => {
            return (
              <div key={job.id}>
                <h3>{job.company}</h3>
                <p>Position (Title): {job.position}</p>
                <p>Responsibilities: {job.responsibilities}</p>
                <p>Worked from {job.fromDate} to {job.toDate}</p>
              </div>
            );
          })
          : <p>There are not any provided jobs.</p>}
      </section>
    </div>
  );
}

export default CV;