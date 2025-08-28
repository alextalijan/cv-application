import Input from "./Input.jsx";

function Job({ companyName, position, responsibilities, fromDate, toDate}) {
  return (
    <div>
      <Input label="Company Name" value={companyName} />
      <Input label="Position Title" value={position} />
      <div>
      <label>
        Main responsibilities
        <textarea>{responsibilities}</textarea>
      </label>
      </div>
      <Input label="Worked From" type="date" value={fromDate} />
      <Input label="Worked Until" type="date" value={toDate} />
    </div>
  )
}

export default Job;