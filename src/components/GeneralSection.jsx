function GeneralSection({ info, handleChange }) {
  return (
    <div>
      <h2 className='section-heading'>General</h2>
      <div className="section-inputs">
        <div className="form-input">
          <label className="input-label">
            Name
            <input
              name="name"
              type="text"
              className="input-field"
              value={info.name}
              onChange={e => handleChange("name", e.target.value)}
            />
          </label>
        </div>

        <div className="form-input">
          <label className="input-label">
            Email
            <input
              name="email"
              type="email"
              className="input-field"
              value={info.email}
              onChange={e => handleChange("email", e.target.value)}
            />
          </label>
        </div>

        <div className="form-input">
          <label className="input-label">
            Phone Number
            <input
              name="phone"
              type="tel"
              className="input-field"
              value={info.phone}
              onChange={e => handleChange("phone", e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default GeneralSection;
