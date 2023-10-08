import '../styles/InputGroup.css'

function InputGroup({
  id,
  label,
  placeholder,
  "data-key": dataKey,
  onChange,
  value,
  type
}) {
  return (
    <div className="input-group">
      <label>{label} </label>

      {type == "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          data-key={dataKey}
          value={value}
          onChange={onChange}
          rows="7"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          data-key={dataKey}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default InputGroup