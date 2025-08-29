import Input from "./Input.jsx";

function Job({ companyName, position, responsibilities, fromDate, toDate, handleDelete}) {
  return (
    <div className="job-section">
      <button className="delete-job-btn" type="button" onClick={handleDelete}>Delete</button>
      <Input label="Company Name" value={companyName} />
      <Input label="Position Title" value={position} />
      <div className="jobResponsibilities-section">
      <label>
        Main Responsibilities:
        <textarea>{responsibilities}</textarea>
      </label>
      </div>
      <Input label="Worked From" type="date" value={fromDate} />
      <Input label="Worked Until" type="date" value={toDate} />
    </div>
  )
}

export default Job;