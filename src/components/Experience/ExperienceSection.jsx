import '../../styles/ResumeSection.css'

function ExperienceSection({ experiences }) {
  return (
    <div className="section-list experience-section-list">
      {experiences.map((exp) => 
        <div key={exp.id} className="section-item experience-item">
          <div>
            <span className="job item-title">{exp.company}</span>
            <span className="item-subtitle">{exp.position}</span>
          </div>
          <div>
            <span className="item-location">{exp.location}</span>
            <span className="divider-icon"> ✦ </span>
            <span className="item-date">{exp.startDate} - {exp.endDate}</span>
          </div>
          <p className="description">{exp.description}</p>
        </div>   
      )}
    </div>
  )
}

export default ExperienceSection;