import PropTypes from 'prop-types';


const DateDifference = ({ date1, date2 }) => {
    const getDaysDifference = (date1, date2) => {
      const oneDay = 1000 * 60 * 60 * 24;
      const diffTime = Math.abs(date2 - date1);
      return Math.ceil(diffTime / oneDay);
    };
  
    const getWeeksDifference = (date1, date2) => {
        const days = getDaysDifference(date1, date2);
        const weeks = days / 7;
      
        return weeks <= 3 ? Math.floor(weeks) : Math.ceil(weeks);
      };
      
  
    if (!date1 || !date2) return null;
  
    return (
      <div className="bg-white p-3 rounded shadow-sm">
        <h3 className="font-bold text-lg mb-2">Skirtumas tarp datų:</h3>
        <p className="mb-1">Dienomis: {getDaysDifference(date1, date2)} dienos</p>
        <p>Savaitėmis: {getWeeksDifference(date1, date2)} savaitės</p>
      </div>
    );
  };
  DateDifference.propTypes = {
    date1: PropTypes.instanceOf(Date).isRequired,
    date2: PropTypes.instanceOf(Date).isRequired,
  };
  export default DateDifference;