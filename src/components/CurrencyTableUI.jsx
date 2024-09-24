import PropTypes from 'prop-types';

const CurrencyTableUI = ({ rates, error, loading, isDarkTheme }) => {
    const backgroundColor = isDarkTheme ? 'bg-darkBackground' : 'bg-lightBackground'; // Set background color based on theme
    const tableColor = isDarkTheme ? 'bg-darkTable' : 'bg-lightTable'; // Set table color based on theme
    const textColor = isDarkTheme ? 'text-white' : 'text-black'; // Set text color based on theme
    const animatedUnderline = 'relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primaryText after:transition-all after:duration-300 hover:after:w-full'; // Animated underline effect
    
    if (loading) return (
        <div className={`flex items-center justify-center min-h-screen`}> {/* Centering the loading message */}
            <div className={`text-center text-lg ${textColor}`}>Loading data, please wait...</div>
        </div>
    ); 
    if (error) return (
        <div className={`flex items-center justify-center min-h-screen`}> {/* Centering the error message */}
            <div className="text-red-500 text-center font-bold">Error: {error}</div>
        </div>
    ); 

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${backgroundColor}`}> {/* Centering the table */}
            <h1 className={`text-3xl font-bold text-primaryText mb-4`}>Currency Exchange Rates</h1> {/* Centered title */}
            <div className="overflow-x-auto w-full max-w-4xl"> {/* Set max width for the table */}
                <table className={`min-w-full ${tableColor} ${textColor} rounded-lg shadow-2xl`}>
                    <thead>
                        <tr>
                            <th className={`py-3 px-4 text-left ${animatedUnderline}`}>Currency</th> {/* Align text to the left */}
                            <th className={`py-3 px-4 text-left ${animatedUnderline}`}>We Buy</th>
                            <th className={`py-3 px-4 text-left ${animatedUnderline}`}>Exchange Rate</th> 
                            <th className={`py-3 px-4 text-left ${animatedUnderline}`}>We Sell</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {rates.map(rate => (
                            <tr key={rate.currency}>
                                <td className="py-2 px-4 text-left">{rate.currency}</td> {/* Align text to the left */}
                                <td className="py-2 px-4 text-left">{rate.buy}</td>
                                <td className="py-2 px-4 text-left">{rate.dollarCurrency}</td> 
                                <td className="py-2 px-4 text-left">{rate.sell}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrencyTableUI.propTypes = {
    rates: PropTypes.array.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    isDarkTheme: PropTypes.bool.isRequired // Add prop type for theme
};

export default CurrencyTableUI;