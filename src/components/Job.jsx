import Input from "./Input.jsx";

function Job({ id, company, position, responsibilities, fromDate, toDate, handleDelete}) {
  return (
    <div className="job-section">
      <button className="delete-job-btn" type="button" onClick={handleDelete}>Delete</button>
      <Input name={`company${id}`} label="Company Name" value={company} />
      <Input name={`position${id}`} label="Position Title" value={position} />
      <div className="jobResponsibilities-section">
      <label>
        Main Responsibilities:
        <textarea name={`responsibilities${id}`} rows="3">{responsibilities}</textarea>
      </label>
      </div>
      <Input name={`workedFrom${id}`} label="Worked From" type="date" value={fromDate} />
      <Input name={`workedUntil${id}`} label="Worked Until" type="date" value={toDate} />
    </div>
  )
}

export default Job;