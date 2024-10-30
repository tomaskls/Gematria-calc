import PropTypes from 'prop-types';

export const LetterGrid = ({ word, activeSystem, systemType }) => {
  const getBgColor = () => {
    switch(systemType) {
      case 'ordinal': return 'bg-blue-50';
      case 'reduction': return 'bg-green-50';
      case 'reverse': return 'bg-purple-50';
      case 'reverseReduction': return 'bg-yellow-50';
      default: return 'bg-gray-50';
    }
  };

  const getDescription = () => {
    switch(systemType) {
      case 'ordinal': return 'A=1, B=2, ..., Z=26';
      case 'reduction': return '1-9 cikliškai';
      case 'reverse': return 'A=26, B=25, ..., Z=1';
      case 'reverseReduction': return '9-1 cikliškai';
      default: return '';
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">{getDescription()}</p>
      <div className="flex flex-wrap gap-2">
        {word.toLowerCase().split('').map((letter, index) => (
          <div 
            key={index}
            className={`p-3 rounded-md text-center min-w-[48px] ${getBgColor()} 
                       transition-colors hover:shadow-sm`}
          >
            <div className="text-lg font-bold">{letter}</div>
            <div className="text-sm font-medium">{activeSystem[letter] || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

LetterGrid.propTypes = {
  word: PropTypes.string.isRequired,
  activeSystem: PropTypes.object.isRequired,
  systemType: PropTypes.string.isRequired
};