import Input from './Input.jsx';

function EducationalSection() {
  return (
    <div>
      <h2>Education</h2>
      <Input label="School Name" />
      <Input label="Title of Study" />
      <Input label="Date of Graduation" type="date" />
    </div>
  );
}

export default EducationalSection;