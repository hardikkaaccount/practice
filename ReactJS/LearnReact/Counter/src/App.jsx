import './App.css'
import { useState } from 'react'

function App() {
  
  let [Counter, setCounter] = useState(0)
  const addValue = () => {
    let newValue = Counter + 1
    setCounter(newValue)
    console.log(newValue)
  }
   
  const subtractValue = () => {
    if (Counter > 0) {
      let newValue = Counter - 1
      setCounter(newValue)
      console.log(newValue)
    }
    return undefined
  }

  return (
    <>
      <h1>Counter Value: {Counter}</h1>
      <button
        onClick={addValue}
        >Add Value</button>
      <button 
        onClick={subtractValue}
        >Subtract Value</button>
    </>
  )
}

export default App
