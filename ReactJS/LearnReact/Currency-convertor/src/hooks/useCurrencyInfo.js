import { useState, useEffect } from 'react'


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        const fetchCurrencyData = async () => {
            const lowerCurrency = currency.toLowerCase();
            const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerCurrency}.json`;
            const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${lowerCurrency}.json`;
            try {
                let response = await fetch(primaryUrl);
                
                if (!response.ok) {
                    response = await fetch(fallbackUrl);
                }
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                setData(result[lowerCurrency] || {});
            } catch (error) {
                console.error('Error fetching currency data:', error);
                setData({});
            }
        };
        
        fetchCurrencyData();
    }, [currency])
    
    console.log(data);
    return data;
}

export default useCurrencyInfo
