import PropTypes from 'prop-types';

const CurrencyTableUI = ({ rates, error, loading }) => {
    if (loading) return <div className="text-center text-lg text-white">Loading...</div>; // Loading message
    if (error) return <div className="text-red-300 text-center">Error: {error}</div>; // Error message

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-darkBackground"> {/* Centering the table */}
            <h1 className='text-3xl font-bold text-secondary mb-4'>Currency Exchange Rates</h1> {/* Centered title */}
            <div className="overflow-x-auto w-full max-w-4xl"> {/* Set max width for the table */}
                <table className="min-w-full bg-darkTable text-white rounded-lg shadow-lg">
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
    loading: PropTypes.bool.isRequired
};

export default CurrencyTableUI;