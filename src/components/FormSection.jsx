import '../styles/FormSection.css'
import Collapsible from 'react-collapsible'

function FormSection({ formClassName, formTitle, children }) {
  return (
    <Collapsible 
      className="form-card"
      trigger={<h5 className="form-title">{formTitle}</h5>}
      transitionTime={150}
    >
      <form className={formClassName}>
        {children}
      </form>
    </Collapsible>
  )
}

export default FormSection