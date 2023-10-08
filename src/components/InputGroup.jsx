import '../styles/InputGroup.css'

function InputGroup({
  id,
  label,
  placeholder,
  "data-key": dataKey,
  onChange,
  value
}) {
  return (
    <div className="input-group">
      <label>{label} </label>
      <input
        id={id}
        placeholder={placeholder}
        data-key={dataKey}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputGroup