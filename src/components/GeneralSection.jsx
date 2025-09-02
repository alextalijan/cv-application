function GeneralSection({ info, handleChange }) {
  return (
    <div>
      <h2 className='section-heading'>General</h2>
      <div className="section-inputs">
        <div className="form-input">
          <label className="input-label">
            Name<span aria-label="required" className="grid-ignore">*</span>
          </label>
          <input
            name="name"
            type="text"
            className="input-field"
            value={info.name}
            onChange={e => handleChange("name", e.target.value)}
            placeholder="e.g. John Doe"
          />
        </div>

        <div className="form-input">
          <label className="input-label">
            Email<span aria-label="required" className="grid-ignore">*</span>
          </label>
          <input
            name="email"
            type="email"
            className="input-field"
            value={info.email}
            onChange={e => handleChange("email", e.target.value)}
            placeholder="john.doe@example.com"
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
            placeholder="+3009008010"
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralSection;
