import "../styles/Resume.css"

function Resume() {
  return (
    <section className="resume-container">
      <div className="resume">
        <h1 className="name main-part">Hana Bae</h1>
        <div className="contact-section side-part">
          <div className="contact-info">
            <p>213.507.5327</p>
            <p>habae1004@gmail.com</p>
          </div>
        </div>
        <p className="summary main-part section-content">
          Self-motivated IT professional with three years of experience and a B.S. in human-computer interaction. Key strengths include communication, analytical problem-solving, attention to detail, and eagerness to learn new skills and tools.
        </p>
        <div className="education-section side-part">
          <h5 className="section-title">EDUCATION</h5>
        </div>
        <div className="experience-section main-part">
          <h5 className="section-title">EXPERIENCE</h5>
        </div>
        <div className="skills-section side-part">
          <h5 className="section-title">SKILLS</h5>
        </div>
      </div>
    </section>
  )
}

export default Resume