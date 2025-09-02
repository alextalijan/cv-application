function EducationalSection({ schoolInfo, handleChange }) {
  return (
    <div>
      <h2 className='section-heading'>Education</h2>
      <div className="section-inputs">
        <div className="form-input">
          <label className="input-label">
            School Name<span aria-label="required" className="grid-ignore">*</span>
          </label>
          <input
            name="school"
            type="text"
            className="input-field"
            value={schoolInfo.school}
            onChange={e => handleChange("school", e.target.value)}
            placeholder="Harvard Law School"
          />
        </div>

        <div className="form-input">
          <label className="input-label">
            Title of Study
          </label>
          <input
            name="studyTitle"
            type="text"
            className="input-field"
            value={schoolInfo.studyTitle}
            onChange={e => handleChange("studyTitle", e.target.value)}
            placeholder="Bachelor of Science"
          />
        </div>

        <div className="form-input">
          <label className="input-label">
            Date of Graduation<span aria-label="required" className="grid-ignore">*</span>
          </label>
          <input
            name="graduationDate"
            type="date"
            className="input-field"
            value={schoolInfo.graduationDate}
            onChange={e => handleChange("graduationDate", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationalSection;
