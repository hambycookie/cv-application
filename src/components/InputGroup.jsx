import '../styles/InputGroup.css'

function InputGroup({
  id,
  label,
  placeholder,
  "data-key": dataKey,
  onChange,
  value,
  type,
  name
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
          name={name}
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
          name={name}
        />
      )}
    </div>
  )
}

export default InputGroup