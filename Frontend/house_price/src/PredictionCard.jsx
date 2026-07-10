const PredictionCard = ({ prediction, setPrediction }) => {
  if (prediction === null) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-105 text-center">

        <h2 className="text-2xl font-bold text-gray-800">
          🏠 Prediction Complete
        </h2>

        <p className="mt-6 text-gray-600">
          Estimated House Price
        </p>

        <h1 className="mt-3 text-5xl font-bold text-teal-600">
          ${prediction.toLocaleString()}
        </h1>

        <button
          onClick={() => setPrediction(null)}
          className="mt-8 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg transition-all duration-200"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default PredictionCard;