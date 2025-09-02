function Job({ id, company, position, responsibilities, fromDate, toDate, handleDelete, handleJobChange }) {
  return (
    <div className="job-section">
      <button className="delete-job-btn" type="button" onClick={handleDelete}>
        Delete
      </button>

      <div className="form-input">
        <label className="input-label">
          Company Name<span aria-label="required" className="grid-ignore">*</span>
        </label>
        <input
          data-id={id}
          name={'company'}
          type="text"
          className="input-field"
          value={company}
          onChange={e => handleJobChange(id, "company", e.target.value)}
          placeholder="e.g. Microsoft"
        />
      </div>

      <div className="form-input">
        <label className="input-label">
          Position Title
        </label>
        <input
          data-id={id}
          name={'position'}
          type="text"
          className="input-field"
          value={position}
          onChange={e => handleJobChange(id, "position", e.target.value)}
          placeholder="Marketing Manager"
        />
      </div>

      <div className="jobResponsibilities-section">
        <label>
          Main Responsibilities<span aria-label="required" className="grid-ignore">*</span>: 
          <textarea
            data-id={id}
            className="input-field responsibilities-input"
            name={'responsibilities'}
            rows="3"
            value={responsibilities}
            onChange={e => handleJobChange(id, "responsibilities", e.target.value)}
            placeholder="Market research, handled people and assigned work to them."
          />
        </label>
      </div>

      <div className="form-input">
        <label className="input-label">
          Worked From
        </label>
        <input
          data-id={id}
          name={'workedFrom'}
          type="date"
          className="input-field"
          value={fromDate}
          onChange={e => handleJobChange(id, "fromDate", e.target.value)}
        />
      </div>

      <div className="form-input">
        <label className="input-label">
          Worked Until
        </label>
        <input
          data-id={id}
          name={'workedUntil'}
          type="date"
          className="input-field"
          value={toDate}
          onChange={e => handleJobChange(id, "toDate", e.target.value)}
        />
      </div>
    </div>
  );
}

export default Job;
