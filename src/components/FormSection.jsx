import '../styles/FormSection.css'

function FormSection({ formClassName, formTitle, children }) {


  return (
    <section className="form-card">
      <form className={formClassName}>
        <h5 className="form-title">{formTitle}</h5>
        {children}
      </form>
    </section>
  )
}

export default FormSection