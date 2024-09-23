import useCurrencyRates from '../hooks/useCurrencyRates';
import CurrencyTableUI from '../components/CurrencyTableUI'; // Ensure this path is correct

const CurrencyTable = ({ isDarkTheme }) => { // Accept the theme prop
    const apiKey = import.meta.env.VITE_CURRENCY_API_KEY; 
    const { rates, error, loading } = useCurrencyRates(apiKey); // Destructure error and loading
    console.log(rates, error, loading)
    return <CurrencyTableUI rates={rates} error={error} loading={loading} isDarkTheme={isDarkTheme} />; // Pass theme state
};

export default CurrencyTable;