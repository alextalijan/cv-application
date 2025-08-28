function Input({ label, type = "text"}) {
  return (
    <div>
      <label>
        {label}
        <input type={type} />
      </label>
    </div>
  )
}

export default Input;