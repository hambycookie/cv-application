import { useState } from 'react'
import './index.css'
import './styles/App.css'

import Resume from './components/Resume'
import PersonalInfoForm from './components/Personal/PersonalInfoForm'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Hana Bae',
    phone: '213.507.5327',
    email: 'habae1004@gmail.com'
  });

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <main className="app">
      <Resume
        personalInfo={personalInfo}
      />
      <section className="edit-panel-container">
        <PersonalInfoForm
          onChange={handlePersonalInfoChange}
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phone={personalInfo.phone}
        />
      </section>
    </main>
  )
}

export default App
