import Input from './Input.jsx';

function EducationalSection({schoolInfo}) {
  return (
    <div>
      <h2 className='section-heading'>Education</h2>
      <div className="section-inputs">
        <Input name="school" label="School Name" value={schoolInfo.school} />
        <Input name="studyTitle" label="Title of Study" value={schoolInfo.studyTitle} />
        <Input name="graduationDate" label="Date of Graduation" type="date" value={schoolInfo.graduationDate} />
      </div>
    </div>
  );
}

export default EducationalSection;