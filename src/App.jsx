import { useState } from 'react'
import './index.css'
import './styles/App.css'

import Resume from './components/Resume'
import EditPanel from './components/EditPanel'

function App() {

  return (
    <main className="app">
      <Resume />
      <EditPanel />
    </main>
  )
}

export default App
