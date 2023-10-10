import '../../styles/FormSection.css'
import InputGroup from '../InputGroup'

function EducationForm({ onChange, id, school, degree, startDate, endDate, location }) {
  return (
    <div
      id={id}
      className="education form-inputs"
    >
      <InputGroup
        type="text"
        label="School"
        id="school"
        placeholder="Enter name of school or institution attended"
        data-key="school"
        value={school}
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Degree"
        id="degree"
        placeholder="Enter name of degree"
        data-key="degree"
        value={degree}
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
    </div>
  )
}

function NewEducationForm({ educations, onChange, addEducation }) {
  return (
    <form
      onSubmit={addEducation}
      id={educations.length + 1}
      className="education form-inputs add-form-inputs"
    >
      <InputGroup
        type="text"
        label="School"
        id="school"
        name="school"
        placeholder="Enter name of school or institution attended"
        data-key="school"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Degree"
        id="degree"
        name="degree"
        placeholder="Enter name of degree"
        data-key="degree"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Start date"
        id="start-date"
        name="startDate"
        placeholder="Enter start date"
        data-key="startDate"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="End date"
        id="end-date"
        name="endDate"
        placeholder="Enter end date"
        data-key="endDate"
        onChange={onChange}
      />
      <InputGroup
        type="text"
        label="Location"
        id="location"
        name="location"
        placeholder="Enter location"
        data-key="location"
      />
      <div className="form-buttons">
        <button type="submit">ADD</button>
      </div>
    </form>
  )
}

export {
  EducationForm,
  NewEducationForm
}