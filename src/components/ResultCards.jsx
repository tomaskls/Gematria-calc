import PropTypes from 'prop-types';

export const ResultCards = ({ ordinalValue, reductionValue, reverseValue, reverseReductionValue }) => {
  return (
    <div className="space-y-2">
      <div className="p-3 bg-blue-50 rounded-md">
        <strong>Ordinal:</strong> {ordinalValue}
        <p className="text-sm text-gray-600 mt-1">
          Raidės A-Z atitinka skaičius 1-26
        </p>
      </div>
      <div className="p-3 bg-green-50 rounded-md">
        <strong>Reduction:</strong> {reductionValue}
        <p className="text-sm text-gray-600 mt-1">
          Skaičiai 1-9 kartojasi cikliškai
        </p>
      </div>
      <div className="p-3 bg-purple-50 rounded-md">
        <strong>Reverse:</strong> {reverseValue}
        <p className="text-sm text-gray-600 mt-1">
          Raidės A-Z atitinka skaičius 26-1
        </p>
      </div>
      <div className="p-3 bg-yellow-50 rounded-md">
        <strong>Reverse Reduction:</strong> {reverseReductionValue}
        <p className="text-sm text-gray-600 mt-1">
          Skaičiai 9-1 kartojasi cikliškai
        </p>
      </div>
    </div>
  );
};

ResultCards.propTypes = {
  ordinalValue: PropTypes.number.isRequired,
  reductionValue: PropTypes.number.isRequired,
  reverseValue: PropTypes.number.isRequired,
  reverseReductionValue: PropTypes.number.isRequired
};