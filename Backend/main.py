import joblib 
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import numpy as np

app = FastAPI()

# Enable CORS for your React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "https://california-house-price-predictor.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your XGBoost model and Scaler
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

class HouseInp(BaseModel):
    latitude : float
    longitude : float
    housing_median_age : int
    total_rooms : int 
    total_bedrooms : int
    population : int
    households : int
    median_income : float
    ocean_proximity : str

@app.get("/")
def home():
    return {"message": "House Price Predictor API is running!"}

@app.post("/predict")
def predict(house : HouseInp):
    try:
        # 1. Initialize dummy variables for your One-Hot Encoding (drop_first=True handles the 5th)
        inland = 0
        island = 0
        near_bay = 0
        near_ocean = 0

        user_choice = house.ocean_proximity.lower().strip()
        if user_choice == "inland":
            inland = 1
        elif user_choice == "island":
            island = 1
        elif user_choice == "near_bay":
            near_bay = 1
        elif user_choice == "near_ocean":
            near_ocean = 1    

        # 2. Match your exact Notebook column structure (X = df.drop('median_house_value', axis=1))
        input_data = [{
            "longitude" : house.longitude,
            "latitude" : house.latitude,
            "housing_median_age" : house.housing_median_age,
            "total_rooms" : house.total_rooms,
            "total_bedrooms" : house.total_bedrooms,
            "population" : house.population,
            "households" : house.households,
            "median_income" : house.median_income,
            "ocean_proximity_INLAND": inland,
            "ocean_proximity_ISLAND": island,
            "ocean_proximity_NEAR BAY": near_bay,
            "ocean_proximity_NEAR OCEAN": near_ocean
        }]
        
        # 3. Process data frame
        df = pd.DataFrame(input_data)
        
        # 4. Scale inputs using the exact 12 features
        scaled_data = scaler.transform(df)
        
        # 5. Predict (this returns the log-transformed value, e.g., 12.34)
        log_prediction = model.predict(scaled_data)[0]
        
        # 6. Reverse np.log1p() using np.expm1() to get back real USD dollars!
        actual_price = np.expm1(log_prediction)

        return {
            "status": "success",
            "predicted_price": round(float(actual_price), 2)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")