import { EducationForm, NewEducationForm } from "./EducationForm";
import Collapsible from 'react-collapsible'
import '../../styles/EducationPanel.css';

function EducationPanel({ educations, onChange, addEducation }) {
  return (
    <div className="education-panel">
      <div className="education-list">
        {educations.map((education) =>
          <Collapsible
            className="education-card"
            key={education.id}
            trigger={<h5 className="card-title">{education.school}</h5>}
            transitionTime={150}
          >
            <EducationForm
              onChange={onChange}
              id={education.id}
              school={education.school}
              degree={education.degree}
              startDate={education.startDate}
              endDate={education.endDate}
              location={education.location}
            />
          </Collapsible>
        )}
      </div>
      <div className="add-education">
        <Collapsible
          className="new-education-card"
          trigger={<h5 className="card-title">Add education</h5>}
          transitionTime={150}
        >
          <NewEducationForm
            educations={educations}
            onChange={onChange}
            addEducation={addEducation}
            />
        </Collapsible>
      </div>
    </div>
    )
}

export default EducationPanel;