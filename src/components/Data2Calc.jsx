import { useState } from 'react';
import SingleDateInfo from './Data1Calc';
import DateDifference from './DataDiff';

const DateCalculator = () => {
  const [inputDate1, setInputDate1] = useState('');
  const [inputDate2, setInputDate2] = useState('');
  const [dates, setDates] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date1 = new Date(inputDate1);
    const date2 = new Date(inputDate2);
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      alert('Prašome įvesti teisingas datas');
      return;
    }
    setDates({ date1, date2 });
  };

  return (
    <div className="flex p-4 gap-10 bg-gray-100 rounded-lg shadow w-1200 mx-auto mt-10">
      
      <div className='flex-col bg-red-100'>
      <h2 className="text-2xl font-bold mb-4 text-center">Datų informacija</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Pirma data:</label>
          <input
            type="date"
            value={inputDate1}
            onChange={(e) => setInputDate1(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Antra data:</label>
          <input
            type="date"
            value={inputDate2}
            onChange={(e) => setInputDate2(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Gauti informaciją
        </button>
      </form>
      </div>
      {dates && (
        <div className="flex gap-10 ">
          <SingleDateInfo date={dates.date1} label="Pirma data" />
          <SingleDateInfo date={dates.date2} label="Antra data" />
          <DateDifference date1={dates.date1} date2={dates.date2} />
        </div>
      )}
    </div>
  );
};

export default DateCalculator;