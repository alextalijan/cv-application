function GeneralSection({ info, handleChange }) {
  return (
    <div>
      <h2 className='section-heading'>General</h2>
      <div className="section-inputs">
        <div className="form-input">
          <label className="input-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="input-field"
            value={info.name}
            onChange={e => handleChange("name", e.target.value)}
          />
        </div>

        <div className="form-input">
          <label className="input-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="input-field"
            value={info.email}
            onChange={e => handleChange("email", e.target.value)}
          />
        </div>

        <div className="form-input">
          <label className="input-label">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            className="input-field"
            value={info.phone}
            onChange={e => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralSection;
