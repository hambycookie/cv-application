import '../../styles/FormSection.css'
import InputGroup from '../InputGroup'

function ExperienceForm({ onChange, id, company, position, location, startDate, endDate, description }) {
  return (
    <div
      id={id}
      className="education form-inputs"
    >
      <InputGroup
        type="text"
        label="Company"
        id="company"
        placeholder="Enter name of company or employer"
        data-key="company"
        value={company}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Position title"
        id="position"
        placeholder="Enter position title"
        data-key="position"
        value={position}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Start date"
        id="start-date"
        placeholder="Enter start date"
        data-key="startDate"
        value={startDate}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="End date"
        id="end-date"
        placeholder="Enter end date"
        data-key="endDate"
        value={endDate}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Location"
        id="location"
        placeholder="Enter location"
        data-key="location"
        value={location}
        onChange={onChange}
      />
      <InputGroup
        type="textarea"
        label="Description"
        id="description"
        placeholder="Enter description"
        data-key="description"
        value={description}
        onChange={onChange}
      />
    </div>
  )
}

function NewExperienceForm({ experiences, onChange, addExperience }) {
  return (
    <form
      onSubmit={addExperience}
      id={experiences.length + 1}
      className="experience add-form-inputs form-inputs"
    >
      <InputGroup
        type="text"
        label="Company"
        id="company"
        placeholder="Enter name of company or employer"
        data-key="company"
        name="company"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Position title"
        id="position"
        placeholder="Enter position title"
        data-key="position"
        name="position"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Start date"
        id="start-date"
        placeholder="Enter start date"
        data-key="startDate"
        name="startDate"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="End date"
        id="end-date"
        placeholder="Enter end date"
        data-key="endDate"
        name="endDate"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Location"
        id="location"
        placeholder="Enter location"
        data-key="location"
        name="location"
        onChange={onChange}
      />
      <InputGroup
        type="textarea"
        label="Description"
        id="description"
        placeholder="Enter description"
        data-key="description"
        name="description"
        onChange={onChange}
      />
      <div className="form-buttons">
        <button type="submit">ADD</button>
      </div>
    </form>
  )
}

export {
  ExperienceForm,
  NewExperienceForm
}