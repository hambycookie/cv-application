import '../../styles/FormSection.css'
import InputGroup from '../InputGroup'

function PersonalInfoForm({ onChange, fullName, email, phone }) {


  return (
    <div className="form-inputs">
      <InputGroup
        type="text"
        label="Full name"
        id="full-name"
        placeholder="Enter full name"
        data-key="fullName"
        value={fullName}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Email"
        id="email"
        placeholder="Enter email"
        data-key="email"
        value={email}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Phone"
        id="phone"
        placeholder="Enter phone number"
        data-key="phone"
        value={phone}
        onChange={onChange}
      />
    </div>
  )
}

export default PersonalInfoForm