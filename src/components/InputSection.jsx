import PropTypes from 'prop-types';

export const InputSection = ({ word, setWord, saveWord }) => {
    return (
      <div className="flex gap-3 mb-5">
        <input
          className="flex-1 px-3 py-2 text-base border border-gray-300 rounded-md outline-none"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Įveskite žodį..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') saveWord();
          }}
        />
        <button 
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={saveWord}
        >
          Išsaugoti
        </button>
      </div>
    );
  };
  
  InputSection.propTypes = {
    word: PropTypes.string.isRequired,
    setWord: PropTypes.func.isRequired,
    saveWord: PropTypes.func.isRequired
  };
  