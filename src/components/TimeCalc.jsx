import { useState } from 'react';

const TimeCalculator = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [result, setResult] = useState(null);

  const handleHoursChange = (value) => {
    const numValue = parseInt(value);
    if (value === '' || (numValue >= 0 && numValue < 24)) {
      setHours(value);
    }
  };

  const handleMinutesChange = (value) => {
    const numValue = parseInt(value);
    if (value === '' || (numValue >= 0 && numValue < 60)) {
      setMinutes(value);
    }
  };

  const calculateMinutes = () => {
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    const remainingMinutes = 24 * 60 - totalMinutes;
    
    return {
      current: totalMinutes,
      remaining: remainingMinutes
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hours !== '' && minutes !== '' && 
        parseInt(hours) >= 0 && parseInt(hours) < 24 && 
        parseInt(minutes) >= 0 && parseInt(minutes) < 60) {
      setResult(calculateMinutes());
    } else {
      alert('Prašome įvesti teisingą laiką (valandos: 0-23, minutės: 0-59)');
    }
  };

  return (
    <div className="p-6 rounded-lg border bg-white shadow-sm max-w-md">
      <h2 className="text-xl font-semibold mb-4">Laiko skaičiuoklė</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2 items-center mb-4">
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={hours}
              onChange={(e) => handleHoursChange(e.target.value)}
              className="w-20 px-3 py-2 border rounded-md"
              placeholder="Val"
              min="0"
              max="23"
              required
            />
            <span className="text-xl">:</span>
            <input
              type="number"
              value={minutes}
              onChange={(e) => handleMinutesChange(e.target.value)}
              className="w-20 px-3 py-2 border rounded-md"
              placeholder="Min"
              min="0"
              max="59"
              required
            />
          </div>
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Patvirtinti
          </button>
        </div>
      </form>

      {result && (
        <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            Įvestas laikas: <span className="font-medium">{hours.padStart(2, '0')}:{minutes.padStart(2, '0')}</span>
          </p>
          <p className="text-gray-700">
            Praėjo minučių nuo paros pradžios: <span className="font-medium">{result.current}</span>
          </p>
          <p className="text-gray-700">
            Liko minučių iki paros pabaigos: <span className="font-medium">{result.remaining}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeCalculator;