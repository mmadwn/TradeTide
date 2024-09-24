import { useState} from 'react'; // Import useEffect
import CurrencyTable from "./pages/CurrencyTable";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true; // Default to dark theme if not set
  });

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', JSON.stringify(newTheme)); // Save the new theme to localStorage
      return newTheme;
    });
  };

  return (
    <div className={isDarkTheme ? 'bg-darkBackground text-white min-h-screen' : 'bg-lightBackground text-lightText min-h-screen'}>
      <button 
        onClick={toggleTheme} 
        className="absolute top-4 right-4 p-2 bg-transparent text-white rounded-full"
        title="Toggle Theme"
      >
        {isDarkTheme ? '🌙' : '☀️'} {/* Icon for dark/light theme */}
      </button>
      <CurrencyTable isDarkTheme={isDarkTheme} /> {/* Pass theme state to CurrencyTable */}
    </div>
  );
}

export default App;
