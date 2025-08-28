import Input from './Input.jsx';

function EducationalSection() {
  return (
    <div>
      <h2>Education</h2>
      <Input label="School Name" type="text" />
      <Input label="Title of Study" type="text" />
      <Input label="Date of Graduation" type="date" />
    </div>
  );
}

export default EducationalSection;