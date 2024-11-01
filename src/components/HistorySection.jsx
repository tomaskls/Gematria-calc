import PropTypes from 'prop-types';

export const HistorySection = ({ history, clearHistory }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Istorija</h2>
        <button 
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
          onClick={clearHistory}
        >
          Išvalyti istoriją
        </button>
      </div>

      <div className="space-y-2">
        {history.map((entry, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-md">
            <div className="flex justify-between mb-1">
              <strong>{entry.word}</strong>
              <span className="text-gray-600">
                {new Date(entry.timestamp).toLocaleString('lt-LT')}
              </span>
            </div>
            <div className="text-sm text-gray-600 space-x-4">
              <span>Ordinal: {entry.values.ordinal}</span>
              <span>Reduction: {entry.values.reduction}</span>
              <span>Reverse: {entry.values.reverse}</span>
              <span>Reverse Reduction: {entry.values.reverseReduction}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

HistorySection.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    values: PropTypes.shape({
      ordinal: PropTypes.number.isRequired,
      reduction: PropTypes.number.isRequired,
      reverse: PropTypes.number.isRequired,
      reverseReduction: PropTypes.number.isRequired
    }).isRequired
  })).isRequired,
  clearHistory: PropTypes.func.isRequired
};