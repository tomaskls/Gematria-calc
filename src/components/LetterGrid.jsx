import PropTypes from 'prop-types';

export const LetterGrid = ({ word, activeSystem, systemType }) => {
  const getBgColor = () => {
    switch(systemType) {
      case 'hebrew': return 'bg-blue-50';
      case 'english': return 'bg-green-50';
      case 'simple': return 'bg-purple-50';
      default: return 'bg-blue-50';
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {word.toLowerCase().split('').map((letter, index) => (
        <div 
          key={index}
          className={`p-2 rounded-md text-center min-w-[40px] ${getBgColor()}`}
        >
          <div className="text-lg font-bold">{letter}</div>
          <div className="text-sm">{activeSystem[letter] || 0}</div>
        </div>
      ))}
    </div>
  );
};

LetterGrid.propTypes = {
  word: PropTypes.string.isRequired,
  activeSystem: PropTypes.object.isRequired,
  systemType: PropTypes.string.isRequired
};