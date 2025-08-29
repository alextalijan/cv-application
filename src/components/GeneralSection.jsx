import Input from './Input.jsx';

function GeneralSection() {
  return (
    <div>
      <h2 className='section-heading'>General Info</h2>
      <div className="section-inputs">
        <Input label="Name" />
        <Input label="Email" type="email" />
        <Input label="Phone Number" type="tel" />
      </div>
    </div>
  );
}

export default GeneralSection;