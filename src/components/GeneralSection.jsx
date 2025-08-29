import Input from './Input.jsx';

function GeneralSection(info) {
  return (
    <div>
      <h2 className='section-heading'>General Info</h2>
      <div className="section-inputs">
        <Input name="name" label="Name" value={info.name} />
        <Input name="email" label="Email" type="email" value={info.email} />
        <Input name="phone" label="Phone Number" type="tel" value={info.phone} />
      </div>
    </div>
  );
}

export default GeneralSection;