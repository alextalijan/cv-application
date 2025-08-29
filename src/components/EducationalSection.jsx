import Input from './Input.jsx';

function EducationalSection() {
  return (
    <div>
      <h2 className='section-heading'>Education</h2>
      <div className="section-inputs">
        <Input label="School Name" />
        <Input label="Title of Study" />
        <Input label="Date of Graduation" type="date" />
      </div>
    </div>
  );
}

export default EducationalSection;