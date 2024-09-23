import { useState } from 'react';
import CurrencyTable from "./pages/CurrencyTable";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? 'bg-darkBackground text-white min-h-screen' : 'bg-lightBackground text-lightText min-h-screen'}>
      <button 
        onClick={toggleTheme} 
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full"
        title="Toggle Theme"
      >
        {isDarkTheme ? '🌙' : '☀️'} {/* Icon for dark/light theme */}
      </button>
      <CurrencyTable isDarkTheme={isDarkTheme} /> {/* Pass theme state to CurrencyTable */}
    </div>
  );
}

export default App;
