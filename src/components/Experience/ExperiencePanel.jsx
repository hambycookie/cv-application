import { ExperienceForm, NewExperienceForm } from "./ExperienceForm";
import Collapsible from 'react-collapsible'
import '../../styles/SectionPanel.css';

function ExperiencePanel({ experiences, onChange, addExperience }) {
  return (
    <div className="section-panel">
      <div className="panel-list">
        {experiences.map((experience) =>
          <Collapsible
            className="experience-card"
            key={experience.id}
            trigger={<h5 className="card-title">{experience.company}</h5>}
            transitionTime={150}
          >
            <ExperienceForm
              onChange={onChange}
              id={experience.id}
              company={experience.company}
              position={experience.position}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              description={experience.description}
            />
          </Collapsible>
        )}
      </div>
      <div className="add-section-item">
        <Collapsible
          className="new-card"
          trigger={<h5 className="card-title">Add experience</h5>}
          transitionTime={150}
        >
          <NewExperienceForm
            experiences={experiences}
            onChange={onChange}
            addExperience={addExperience}
            />
        </Collapsible>
      </div>
    </div>
    )
}

export default ExperiencePanel;