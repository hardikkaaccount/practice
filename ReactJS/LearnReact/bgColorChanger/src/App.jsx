import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    // bg color changer
    <div>
      <div className="bg-color" style={{ backgroundColor: color, height: '100vh', width: '100vw' }}>
        <h1>Background Color Changer</h1>
        <p>Current Color: {color}</p>
        <button className="bg-red-500 hover:bg-red-700" onClick={() => setColor('red')}>Change to Red</button>
        <button className="bg-blue-500 hover:bg-blue-700" onClick={() => setColor('blue')}>Change to Blue</button>
        <button className="bg-green-500 hover:bg-green-700" onClick={() => setColor('green')}>Change to Green</button>
      </div>
    </div>
  )
}

export default App
