function Input({ label, type}) {
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