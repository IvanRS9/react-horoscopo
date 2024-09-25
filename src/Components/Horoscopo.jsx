import PropTypes from "prop-types";

const Horoscopo = ({ zodiacSign, dateRange, description }) => {
  return (
    <div className="p-2 rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-2">{zodiacSign}</h2>
      <p className="text-gray-900 mb-2">{dateRange}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full px-6 mb-6 mt-4">
        <div>
          <img src={"/src/assets/" + zodiacSign + ".jpg"} className="w-44" />
        </div>
        <div>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

Horoscopo.propTypes = {
  zodiacSign: PropTypes.string,
  dateRange: PropTypes.string,
  description: PropTypes.string,
};

export default Horoscopo;
