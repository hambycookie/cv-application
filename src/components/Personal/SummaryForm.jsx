import InputGroup from '../InputGroup'

function SummaryForm({ onChange, summary }) {
  return (
    <div className="form-inputs">
      <InputGroup
        type="textarea"
        id="summary"
        placeholder="Enter a summary or objective"
        value={summary}
        onChange={onChange}
      />
    </div>
  )
}

export default SummaryForm