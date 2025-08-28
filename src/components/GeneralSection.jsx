import Input from './Input.jsx';

function GeneralSection() {
  return (
    <div>
      <h2>General Info</h2>
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="Phone Number" type="tel" />
    </div>
  );
}

export default GeneralSection;