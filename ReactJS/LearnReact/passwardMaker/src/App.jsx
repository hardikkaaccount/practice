import { useState, useEffect, useCallback, useRef } from 'react' 
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(passwordRef.current?.value)
  }, [password])

  const handleGenerate = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (symbol) str += "!@#$%^&*()_+"
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
    console.log(pass)
  }, [length, number, symbol, setPassword])

  useEffect(() => {
    handleGenerate()
  }, [length, number, symbol, handleGenerate])

  return (
    <>
      <div className='w-full max-w-md flex flex-col items-center justify-center gap-6 bg-slate-900 p-8 rounded-lg shadow-lg'> 
        <h1 className='text-2xl font-bold text-white'>Password Generator</h1> 
        <div className='flex flex-col gap-2'> 
          <input className='flex overflow-hidden items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Password' value={password} readOnly ref={passwordRef} />
          <button className='flex items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={copyPassToClipboard}>Copy</button>
        </div>

        <div className='flex flex-col gap-2'> 
          <div className='flex items-center gap-1'>
            <label className='text-white'>Length: {length}</label>
            <input className='flex overflow-hidden items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="range" min="4" max="20" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div className='flex items-center gap-1'>
            <label className='text-white'>Include Numbers</label>
            <input className='flex overflow-hidden items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="checkbox" checked={number} onChange={(e) => setNumber((prev) => !prev)} />
          </div>
          <div className='flex items-center gap-1'>
            <label className='text-white'>Include Symbols</label>
            <input className='flex overflow-hidden items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="checkbox" checked={symbol} onChange={(e) => setSymbol((prev) => !prev)} /> 
          </div>
        </div>
        {/* <button className='flex items-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={handleGenerate}>Generate</button> */}
      </div>
    </>
  )
}

export default App
