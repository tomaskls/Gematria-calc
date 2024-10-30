import { useState } from 'react';
import { InputSection } from './InputSection';
import { LetterGrid } from './LetterGrid';
import { ResultCards } from './ResultCards';
import { TabGroup } from './TabGroup';
import { Ordinal, Reduction, Reverse, ReverseReduction } from './GematriaConstants';
import { useHistory } from './useHistory';

const GematriaCalculator = () => {
  const [word, setWord] = useState('');
  const [activeTab, setActiveTab] = useState('ordinal');
  const { addToHistory } = useHistory();

  const calculateGematria = (word, system) => {
    return word.toLowerCase().split('')
      .reduce((sum, char) => sum + (system[char] || 0), 0);
  };

  const saveWord = () => {
    if (word.trim()) {
      const newEntry = {
        word: word,
        timestamp: new Date().toISOString(),
        values: {
          ordinal: calculateGematria(word, Ordinal),
          reduction: calculateGematria(word, Reduction),
          reverse: calculateGematria(word, Reverse),
          reverseReduction: calculateGematria(word, ReverseReduction)
        }
      };
      addToHistory(newEntry);
      setWord('');
    }
  };

  const getActiveSystem = () => {
    switch(activeTab) {
      case 'ordinal': return Ordinal;
      case 'reduction': return Reduction;
      case 'reverse': return Reverse;
      case 'reverseReduction': return ReverseReduction;
      default: return Ordinal;
    }
  };

  return (
    <div className="min-w-2xl mx-auto my-5 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Gematria Skaičiuoklė</h1>

      <InputSection word={word} setWord={setWord} saveWord={saveWord} />

      <ResultCards 
        word={word}
        ordinalValue={calculateGematria(word, Ordinal)}
        reductionValue={calculateGematria(word, Reduction)}
        reverseValue={calculateGematria(word, Reverse)}
        reverseReductionValue={calculateGematria(word, ReverseReduction)}
      />

      {word && (
        <>
          <TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
          <LetterGrid
            word={word}
            activeSystem={getActiveSystem()}
            systemType={activeTab}
          />
        </>
      )}
    </div>
  );
};

export default GematriaCalculator;