import Input from "./Input.jsx";

function Job() {
  return (
    <div>
      <Input label="Company Name" />
      <Input label="Position Title" />
      <div>
      <label>
        Main responsibilities
        <textarea></textarea>
      </label>
      </div>
      <Input label="Worked From" type="date" />
      <Input label="Worked Until" type="date" />
    </div>
  )
}

export default Job;