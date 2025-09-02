function CV({ info, toggleEditMode }) {
  return (
    <div className="cv-paper">
      <button className="edit-cv-btn" onClick={toggleEditMode} type="button">EDIT</button>

      <section className="finished-cv-section">
        <h2>General</h2>
        <p>Name: <b>{info.name || 'Not known'}</b></p>
        <p>Email: <b>{info.email || 'Not provided'}</b></p>
        <p>Phone Number: <b>{info.phone || 'Not provided'}</b></p>
      </section>
      <section className="finished-cv-section">
        <h2>Education</h2>
        <p>School Name: <b>{info.school || 'None'}</b></p>
        {info.school !== ''
          && <>
              <p>Study Title: <b>{info.studyTitle || 'None'}</b></p>
              <p>Graduation Date: <b>{info.graduationDate || 'None'}</b></p>
            </>}
      </section>

      <section className="finished-cv-section">
        <h2>Experience</h2>
        <div className="finished-jobs-list">
          {info.jobs.length > 0
            ? info.jobs.map(job => {
              return (
                <div key={job.id} className="finished-job-section">
                  <h3><i>{job.company || "Some Company"}</i></h3>
                  <p>Position (Title): <b>{job.position || "Not defined"}</b></p>
                  <p>Responsibilities: <b>{job.responsibilities || "Unknown"}</b></p>
                  <p>Worked from <b>{job.fromDate || "some date"}</b> to <b>{job.toDate || "some other date"}</b>.</p>
                </div>
              );
            })
            : <p>There are not any provided jobs.</p>}
        </div>
      </section>

      <img className="cv-stamp" src="/stamp.png" alt="" />
    </div>
  );
}

export default CV;