import "../styles/Resume.css"
import EducationSection from "./Education/EducationSection"

function Resume({ personalInfo, summary, educations }) {
  return (
    <section className="resume-paper">
      <div className="resume">
        <h1 className="name main-part">{personalInfo.fullName}</h1>
        <div className="contact-section side-part">
          <div className="contact-info">
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.email}</p>
          </div>
        </div>
        <p className="summary main-part section-content-indent">
          {summary}
        </p>
        <div className="education-section side-part">
          <div className="education-content">
            <h5 className="section-title">EDUCATION</h5>
            <EducationSection educations={educations} />
          </div>
        </div>
        <div className="experience-section main-part">
          <div className="experience-content">
            <h5 className="section-title">EXPERIENCE</h5>
            {/* insert section-content here */}
          </div>
        </div>
        <div className="skills-section side-part">
          <div className="skills-content">
            <h5 className="section-title">SKILLS</h5></div>
            {/* insert section-content */}
          </div>
      </div>
    </section>
  )
}

export default Resume