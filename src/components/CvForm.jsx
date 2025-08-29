import GeneralSection from './components/GeneralSection.jsx';
import EducationalSection from './components/EducationalSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';

function CvForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form action="">
      <div className='cv-paper'>
        <GeneralSection className="section" />
        <hr className='section-break' />
        <EducationalSection className="section"/>
        <hr className='section-break' />
        <ExperienceSection className="section" />
      </div>
      <button className='submitCV-btn' type='submit' onSubmit={handleSubmit}>Submit CV</button>
    </form>
  );
}

export default CvForm;