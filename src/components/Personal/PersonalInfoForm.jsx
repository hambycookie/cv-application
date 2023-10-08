import '../../styles/forms.css'
import InputGroup from '../InputGroup'

function PersonalInfoForm({ onChange, fullName, email, phone }) {


  return (
    <section className="form-card">
      <form className="personal-info-form">
        <h5 className="form-title">PERSONAL</h5>
        <div className="form-questions">
          <InputGroup
            label="Full name"
            id="full-name"
            placeholder="Enter full name"
            data-key="fullName"
            value={fullName}
            onChange={onChange}
          />
          <InputGroup 
            label="Email"
            id="email"
            placeholder="Enter email"
            data-key="email"
            value={email}
            onChange={onChange}
          />
          <InputGroup
            label="Phone"
            id="phone"
            placeholder="Enter phone number"
            data-key="phone"
            value={phone}
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  )
}

export default PersonalInfoForm