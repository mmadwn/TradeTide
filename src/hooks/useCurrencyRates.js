import { useEffect, useState } from 'react';

const useCurrencyRates = (apiKey) => {
    const [rates, setRates] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchRates = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const currencies = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP', 'USD'];
                const ratesData = currencies.map(currency => ({
                    currency,
                    buy: (data.rates[currency] / data.rates['USD']).toFixed(4),
                    sell: (data.rates[currency] / data.rates['USD'] * 1.01).toFixed(4),
                }));
                setRates(ratesData);
            } catch (error) {
                console.error("Error fetching currency rates:", error);
                setError(error.message);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchRates();
    }, [apiKey]);

    return { rates, error, loading }; // Return loading state
};

export default useCurrencyRates;