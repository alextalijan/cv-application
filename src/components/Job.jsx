function Job({ id, company, position, responsibilities, fromDate, toDate, handleDelete, handleJobChange }) {
  return (
    <div className="job-section">
      <button className="delete-job-btn" type="button" onClick={handleDelete}>
        Delete
      </button>

      <div className="form-input">
        <label className="input-label">
          Company Name
          <input
            name={'company'}
            type="text"
            className="input-field"
            value={company}
            onChange={e => handleJobChange(id, "company", e.target.value)}
          />
        </label>
      </div>

      <div className="form-input">
        <label className="input-label">
          Position Title
          <input
            name={'position'}
            type="text"
            className="input-field"
            value={position}
            onChange={e => handleJobChange(id, "position", e.target.value)}
          />
        </label>
      </div>

      <div className="jobResponsibilities-section">
        <label>
          Main Responsibilities:
          <textarea
            name={'responsibilities'}
            rows="3"
            value={responsibilities}
            onChange={e => handleJobChange(id, "responsibilities", e.target.value)}
          />
        </label>
      </div>

      <div className="form-input">
        <label className="input-label">
          Worked From
          <input
            name={'workedFrom'}
            type="date"
            className="input-field"
            value={fromDate}
            onChange={e => handleJobChange(id, "fromDate", e.target.value)}
          />
        </label>
      </div>

      <div className="form-input">
        <label className="input-label">
          Worked Until
          <input
            name={'workedUntil'}
            type="date"
            className="input-field"
            value={toDate}
            onChange={e => handleJobChange(id, "toDate", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default Job;
