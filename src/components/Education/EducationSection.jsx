import '../../styles/ResumeSection.css'
// import '../../styles/Resume.css'

function EducationSection({ educations }) {
  return (
    <div className="section-list education-section-list">
      {educations.map((education) => 
        <div key={education.id} className="section-item education-item">
          <p className="item-title">{education.school}</p>
          <p className="item-date">{education.startDate} - {education.endDate}</p>
          <p className="degree">{education.degree}</p>
        </div>   
      )}
    </div>
  )
}

export default EducationSection;