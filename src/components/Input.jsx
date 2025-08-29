function Input({ label, type = "text"}) {
  return (
    <div className="form-input">
      <label className="input-label">{label}</label>
      <input type={type} className="input-field" />
    </div>
  )
}

export default Input;