import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState('INR')
  const [to, setTo] = useState('USD')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount.toFixed(2)) 
    setAmount(convertedAmount.toFixed(2))
  }

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    } else {
      setConvertedAmount(0)
    }
  }

  return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100" style={{ backgroundImage: 'url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?_gl=1*9hm18r*_ga*MTk3NzQwMTYwMC4xNzYzNTQxMzAy*_ga_8JE65Q40S6*czE3NjM1NDEzMDEkbzEkZzAkdDE3NjM1NDEzMDIkajU5JGwwJGgw)', height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Currency Converter</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                    className="space-y-6"
                >
                    <div className="space-y-4 text-gray-800">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onAmountChange={(amount) => setAmount(amount.toFixed(2))}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                        />

                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-sm transition-colors duration-200"
                                onClick={swap}
                                aria-label="Swap currencies"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            </button>
                        </div>
                        
                        <InputBox
                            label="To"
                            amount={convertedAmount.toFixed(2)}
                            currencyOption={options}
                            onAmountChange={(amount) => setConvertedAmount(amount.toFixed(2))}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable={true}
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-200"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App
 