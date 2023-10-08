import '../styles/InputGroup.css'

function InputGroup({ label, id, placeholder }) {
  return (
    <div className="input-group">
      <label>{label} </label>
      <input
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputGroup