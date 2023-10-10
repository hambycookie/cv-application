import "../styles/Resume.css"
import EducationSection from "./Education/EducationSection"
import ExperienceSection from "./Experience/ExperienceSection"

function Resume({ personalInfo, summary, educations, experiences }) {
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
          <h5 className="section-title">EDUCATION</h5>
          <div className="education-content">
            <EducationSection educations={educations} />
          </div>
        </div>
        <div className="experience-section main-part">
          <h5 className="section-title">EXPERIENCE</h5>
          <div className="experience-content">
            <ExperienceSection experiences={experiences}/>
          </div>
        </div>
        <div className="skills-section side-part">
          <h5 className="section-title">SKILLS</h5></div>
          <div className="skills-content">
            {/* insert section-content */}
          </div>
      </div>
    </section>
  )
}

export default Resume