import PropTypes from 'prop-types';

const SingleDateInfo = ({ date, label }) => {
  // Funkcija, kuri skaičiuoja metų dieną
  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  // Funkcija, kuri skaičiuoja metų savaitę
  const getWeekOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - start) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
  };

  // Funkcija, kuri skaičiuoja, kiek dienų liko iki metų galo
  const getDaysLeftInYear = (date) => {
    const lastDay = new Date(date.getFullYear(), 11, 31);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil((lastDay - date) / oneDay);
  };

  // Funkcija savaičių skaičiavimui
  const getWeeksLeftInYear = (date) => {
    const daysLeft = getDaysLeftInYear(date);
    return Math.ceil(daysLeft / 7);
  };

  // Funkcija "mėnuo/diena" ir "diena/mėnuo" formatams
  const getSpecialFormats = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return {
      monthDay: month + day,
      dayMonth: day + month,
    };
  };

  if (!date) return null;
  const formats = getSpecialFormats(date);

  return (
    <div className="bg-yellow-200 p-3 rounded shadow-sm">
      <h3 className="font-bold mb-2 text-lg">{label}:</h3>
      <p className="mb-1">Metų diena: {getDayOfYear(date)}</p>
      <p className="mb-1">Metų savaitė: {getWeekOfYear(date)}</p>
      <p className="mb-1">Dienų liko iki metų galo: {getDaysLeftInYear(date)}</p>
      <p className="mb-1">Savaičių liko iki metų galo: {getWeeksLeftInYear(date)}</p>
      <p className="mb-1">Mėnuo/Diena: {formats.monthDay}</p>
      <p>Diena/Mėnuo: {formats.dayMonth}</p>
    </div>
  );
};

SingleDateInfo.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired,
};

export default SingleDateInfo;
