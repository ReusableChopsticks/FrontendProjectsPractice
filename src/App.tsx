import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='main'>
      <h1>UI Practice</h1>
      {/* heading is a :before pseudoelement! Check App.css */}
      <ul aria-label='Page navigation'>
        <li><Link to="1">Manage Homepage</Link></li>
        <li><Link to="2">Accordion</Link></li>
      </ul>
      etc...
    </div>
  )
}

export default App
