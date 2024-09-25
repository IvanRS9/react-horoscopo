import PropTypes from "prop-types";

const DateCard = ({ onDateChange }) => {
  return (
    <div className="p-6 rounded-lg  mb-4 w-80">
      <h2 className="text-xl font-bold mb-4">Introduce tu fecha de nacimiento</h2>
      <input
        type="date"
        className="border border-gray-300 p-2 rounded w-full"
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
};

DateCard.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default DateCard;
