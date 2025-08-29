function Input({ label, name, value, type = "text"}) {
  return (
    <div className="form-input">
      <label className="input-label">{label}</label>
      <input name={name} type={type} value={value} className="input-field" />
    </div>
  )
}

export default Input;