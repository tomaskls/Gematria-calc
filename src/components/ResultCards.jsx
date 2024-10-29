import PropTypes from 'prop-types';

export const ResultCards = ({ hebrewValue, englishValue, simpleValue }) => {
  return (
    <div className="space-y-2">
      <div className="p-3 bg-blue-50 rounded-md">
        <strong>Hebrajų Gematrija:</strong> {hebrewValue}
      </div>
      <div className="p-3 bg-green-50 rounded-md">
        <strong>Anglų Gematrija:</strong> {englishValue}
      </div>
      <div className="p-3 bg-purple-50 rounded-md">
        <strong>Paprasta Gematrija:</strong> {simpleValue}
      </div>
    </div>
  );
};

ResultCards.propTypes = {
  word: PropTypes.string.isRequired,
  hebrewValue: PropTypes.number.isRequired,
  englishValue: PropTypes.number.isRequired,
  simpleValue: PropTypes.number.isRequired
};