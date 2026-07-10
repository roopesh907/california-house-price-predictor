import { useState } from "react";
import HouseForm from "./HouseForm"
import Navbar from "./Navbar"
import PredictionCard from "./PredictionCard"



  const App = () => {
  const [prediction, setPrediction] = useState(null);
  return (
    <div>
      <Navbar/>
      <HouseForm setPrediction={setPrediction}/>
      <PredictionCard prediction={prediction} setPrediction={setPrediction} />
    </div>
  )
}

export default App
