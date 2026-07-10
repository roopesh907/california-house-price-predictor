import { useState } from "react";
import axios from "axios";

const HouseForm = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    longitude: "",
    latitude: "",
    housing_median_age: "",
    median_income: "",
    total_rooms: "",
    total_bedrooms: "",
    population: "",
    households: "",
    ocean_proximity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://california-house-price-predictor-56lk.onrender.com/predict",
        formData
      );

      setPrediction(response.data.predicted_price);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-10 flex justify-center items-center bg-linear-to-br from-green-100 via-teal-100 to-cyan-100">
      <div className="w-full max-w-2xl bg-teal-50 backdrop-blur-md rounded-2xl shadow-2xl p-8 mt-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          House Information
        </h2>

        <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Longitude</label>
            <input
              type="number"
              name="longitude"
              placeholder="-122.23"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Latitude</label>
            <input
              type="number"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              placeholder="37.88"
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">House Median Age</label>
            <input
              type="number"
              min={0}
              name="housing_median_age"
              value={formData.housing_median_age}
              onChange={handleChange}
              placeholder="10"
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Median Income</label>
            <input
              type="number"
              name="median_income"
              value={formData.median_income}
              onChange={handleChange}
              placeholder="4.7"
              min={0}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Total Rooms</label>
            <input
              type="number"
              name="total_rooms"
              value={formData.total_rooms}
              onChange={handleChange}
              placeholder="6"
              min={0}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Total Bedrooms</label>
            <input
              type="number"
              name="total_bedrooms"
              value={formData.total_bedrooms}
              onChange={handleChange}
              placeholder="3"
              min={0}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Population</label>
            <input
              type="number"
              name="population"
              value={formData.population}
              onChange={handleChange}
              placeholder="700"
              min={0}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Households</label>
            <input
              type="number"
              name="households"
              value={formData.households}
              onChange={handleChange}
              placeholder="400"
              min={0}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Ocean Proximity</label>
            <select
              name="ocean_proximity"
              className="w-full bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.ocean_proximity}
              onChange={handleChange}
            >
              <option value="" disabled>Select Ocean Proximity</option>
              <option value="INLAND">INLAND</option>
              <option value="ISLAND">ISLAND</option>
              <option value="NEAR BAY">NEAR BAY</option>
              <option value="NEAR OCEAN">NEAR OCEAN</option>
            </select>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Predict House Price
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default HouseForm;