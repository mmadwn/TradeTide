import PropTypes from 'prop-types';

const CurrencyTableUI = ({ rates, error, loading, isDarkTheme }) => {
    const backgroundColor = isDarkTheme ? 'bg-darkBackground' : 'bg-lightTable'; // Set background color based on theme
    const textColor = isDarkTheme ? 'text-white' : 'text-black'; // Set text color based on theme

    if (loading) return (
        <div className={`flex items-center justify-center min-h-screen ${backgroundColor}`}> {/* Centering the loading message */}
            <div className={`text-center text-lg ${textColor}`}>Loading data, please wait...</div>
        </div>
    ); // Updated loading message with background
    if (error) return (
        <div className={`flex items-center justify-center min-h-screen ${backgroundColor}`}> {/* Centering the error message */}
            <div className="text-red-500 text-center font-bold">Error: {error}</div>
        </div>
    ); // Updated error message with background

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${backgroundColor}`}> {/* Centering the table */}
            <h1 className={`text-3xl font-bold text-secondary mb-4 ${textColor}`}>Currency Exchange Rates</h1> {/* Centered title */}
            <div className="overflow-x-auto w-full max-w-4xl"> {/* Set max width for the table */}
                <table className={`min-w-full ${backgroundColor} ${textColor} rounded-lg shadow-lg`}>
                    <thead>
                        <tr className="hover:bg-darkBackground">
                            <th className="py-3 px-4 text-left">Currency</th> {/* Align text to the left */}
                            <th className="py-3 px-4 text-left">We Buy</th>
                            <th className="py-3 px-4 text-left">Exchange Rate</th> 
                            <th className="py-3 px-4 text-left">We Sell</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {rates.map(rate => (
                            <tr key={rate.currency} className="hover:bg-gray-700">
                                <td className="py-2 px-4 text-left">{rate.currency}</td> {/* Align text to the left */}
                                <td className="py-2 px-4 text-left">{rate.buy}</td>
                                <td className="py-2 px-4 text-left">{(1 / rate.buy).toFixed(4)}</td> 
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