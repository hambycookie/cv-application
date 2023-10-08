import { useState } from 'react'
import './index.css'
import './styles/App.css'

import Resume from './components/Resume'
import FormSection from './components/FormSection'
import PersonalInfoForm from './components/Personal/PersonalInfoForm'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Hana Bae',
    phone: '213.507.5327',
    email: 'habae1004@gmail.com'
  });
  const [summary, setSummary] = useState('');

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
      />
      <section className="edit-panel-container">
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
      </section>
    </main>
  )
}

export default App
