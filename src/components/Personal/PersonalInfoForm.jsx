import '../../styles/forms.css'
import InputGroup from '../InputGroup'

function PersonalInfoForm() {
  return (
    <section className="form-card">
      <form>
        <h5 className="form-title">PERSONAL</h5>
        <div className="form-questions">
          <InputGroup
            label="Full name"
            id="full-name"
            placeholder="Enter full name"
          />
          <InputGroup 
            label="Email"
            id="email"
            placeholder="Enter email"
          />
          <InputGroup
            label="Phone"
            id="phone"
            placeholder="Enter phone number"
          />
        </div>
      </form>
    </section>
  )
}

export default PersonalInfoForm