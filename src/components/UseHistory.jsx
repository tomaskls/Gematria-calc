import { useState, useEffect } from 'react';

export const useHistory = () => {
  const [history, setHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem('gematriaHistory');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error('Klaida nuskaitant istoriją:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gematriaHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Klaida išsaugant istoriją:', error);
    }
  }, [history]);

  const addToHistory = (entry) => {
    setHistory(prevHistory => [entry, ...prevHistory]);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('gematriaHistory');
  };

  return {
    history,
    addToHistory,
    clearHistory
  };
};