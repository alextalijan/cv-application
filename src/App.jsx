import GeneralSection from './components/GeneralSection.jsx';
import EducationalSection from './components/EducationalSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';

function App() {
  return (
    <>
      <h1 className='h1'>CV Builder</h1>
      <div className='cv-paper'>
        <GeneralSection className="section" />
        <hr className='section-break' />
        <EducationalSection className="section"/>
        <hr className='section-break' />
        <ExperienceSection className="section" />
      </div>
    </>
  )
}

export default App
