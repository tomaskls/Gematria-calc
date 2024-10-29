import { useState, useEffect } from 'react';
import { hebrewGematria, englishGematria, simpleGematria } from './GematriaConstants';
import { HistorySection } from './HistorySection';
import { InputSection } from './InputSection';
import { LetterGrid } from './LetterGrid';
import { ResultCards } from './ResultCards';
import { TabGroup } from './TabGroup';

const GematriaCalculator = () => {
  const [word, setWord] = useState('');
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('hebrew');

  useEffect(() => {
    const savedHistory = localStorage.getItem('gematriaHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gematriaHistory', JSON.stringify(history));
  }, [history]);

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
          hebrew: calculateGematria(word, hebrewGematria),
          english: calculateGematria(word, englishGematria),
          simple: calculateGematria(word, simpleGematria)
        }
      };
      setHistory([newEntry, ...history]);
      setWord('');
    }
  };

  const getActiveSystem = () => {
    switch(activeTab) {
      case 'hebrew': return hebrewGematria;
      case 'english': return englishGematria;
      case 'simple': return simpleGematria;
      default: return hebrewGematria;
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-5 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Gematria Skaičiuoklė</h1>

      <InputSection word={word} setWord={setWord} saveWord={saveWord} />

      <ResultCards 
        word={word}
        hebrewValue={calculateGematria(word, hebrewGematria)}
        englishValue={calculateGematria(word, englishGematria)}
        simpleValue={calculateGematria(word, simpleGematria)}
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

      {history.length > 0 && (
        <HistorySection 
          history={history}
          clearHistory={() => setHistory([])}
        />
      )}
    </div>
  );
};

export default GematriaCalculator;