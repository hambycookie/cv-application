import { useState } from 'react'
import './index.css'
import './styles/App.css'

import sampleData from './sample-data'
import Resume from './components/Resume'
import FormSection from './components/FormSection'
import PersonalInfoForm from './components/Personal/PersonalInfoForm'
import SummaryForm from './components/Personal/SummaryForm'
import EducationPanel from './components/Education/EducationPanel'

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);
  const [summary, setSummary] = useState(sampleData.summary);
  const [educationInfo, setEducationInfo] = useState(sampleData.education);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  function handleEducationInfoChange(e) {
    const { key } = e.target.dataset;
    const formId = e.target.closest(".form-inputs").id;
    const updatedInfo = educationInfo.map((obj) => {
        if (obj.id == formId) {
          return {...obj, [key]: e.target.value}
        } else {
          return obj;
        }
      });
    setEducationInfo(updatedInfo);
  }

  function handleAddEducationInfo(e) {
    e.preventDefault();
    const newObj = {
      id: e.target.id,
      school: e.target.school.value,
      degree: e.target.degree.value,
      location: e.target.location.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    setEducationInfo([...educationInfo, newObj]);
    e.target.reset();
  }

  return (
    <main className="app">
      <Resume
        personalInfo={personalInfo}
        summary={summary}
        educations={educationInfo}
      />
      <section className="edit-panel">
        
        <FormSection
          formClassName="personal-info-form"
          formTitle="Personal"
        >
          <PersonalInfoForm
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phone={personalInfo.phone}
          />
        </FormSection>

        <FormSection
          formClassName="summary-form"
          formTitle="Summary"
        >
          <SummaryForm 
            onChange={handleSummaryChange}
            summary={summary}
          />
        </FormSection>

        <FormSection
          formClassName="education-form"
          formTitle="Education"
        >
          <EducationPanel
            educations={educationInfo}
            onChange={handleEducationInfoChange}
            addEducation={handleAddEducationInfo}
          />
        </FormSection>

      </section>
    </main>
  )
}

export default App
