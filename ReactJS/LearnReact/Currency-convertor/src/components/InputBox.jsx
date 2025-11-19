import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId()
    
    // Format amount for display with commas
    const formatAmount = (num) => {
        if (isNaN(num)) return '';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    
    // Parse formatted amount back to number
    const parseAmount = (str) => {
        return parseFloat(str.replace(/,/g, '')) || 0;
    };
    
    return (
        <div className={`bg-gray-50 p-4 rounded-xl shadow-sm ${className}`}>
            <div className="flex justify-between items-center mb-2">
                <label htmlFor={amountInputId} className="text-gray-700 font-medium">
                    {label}
                </label>
                <span className="text-sm text-gray-500">
                    {selectCurrency.toUpperCase()}
                </span>
            </div>
            
            <div className="flex gap-3">
                <div className="flex-1">
                    <input
                        id={amountInputId}
                        className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        type="text"
                        placeholder="0.00"
                        disabled={amountDisable}
                        value={amountDisable ? formatAmount(amount) : amount}
                        onChange={(e) => onAmountChange && onAmountChange(parseAmount(e.target.value))}
                        onFocus={(e) => {
                            if (!amountDisable) {
                                e.target.select();
                            }
                        }}
                    />
                </div>
                
                <div className="w-32">
                    <select
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition cursor-pointer"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOption
                            .filter(currency => currency) // Filter out empty values
                            .sort() // Sort alphabetically
                            .map((curr) => (
                                <option key={curr} value={curr}>
                                    {curr.toUpperCase()}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default InputBox;
