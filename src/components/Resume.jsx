import "../styles/Resume.css"
import EducationSection from "./Education/EducationSection"
import ExperienceSection from "./Experience/ExperienceSection"

function Resume({ personalInfo, summary, educations, experiences }) {
  return (
    <section className="resume-paper">
      <div className="resume-container">
        <div className="main-part">
          <div className="name-section">
            <h1 className="name">{personalInfo.fullName}</h1>
          </div>
          <div className="summary-section">
            <p className="summary">
              {summary}
            </p>
          </div>
          <div className="experience-section">
            <h5 className="section-title">EXPERIENCE</h5>
            <div className="experience-content">
              <ExperienceSection experiences={experiences} />
            </div>
          </div>
        </div>
        <div className="side-part">
          <div className="contact-section">
            <div className="contact-info">
              <p>☎ {personalInfo.phone}</p>
              <p>✉ {personalInfo.email}</p>
            </div>
          </div>
          <div className="education-section">
            <h5 className="section-title">EDUCATION</h5>
            <div className="education-content">
              <EducationSection educations={educations} />
            </div>
          </div>
          <div className="skills-section">
            <h5 className="section-title">SKILLS</h5>
            <div className="skills-content">
              {/* insert section-content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume