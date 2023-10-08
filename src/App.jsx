import { useState } from 'react'
import './index.css'
import './styles/App.css'

import sampleData from './sample-data'
import Resume from './components/Resume'
import FormSection from './components/FormSection'
import PersonalInfoForm from './components/Personal/PersonalInfoForm'
import SummaryForm from './components/Personal/SummaryForm'

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);
  const [summary, setSummary] = useState(sampleData.summary);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  return (
    <main className="app">
      <Resume
        personalInfo={personalInfo}
        summary={summary}
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

      </section>
    </main>
  )
}

export default App
