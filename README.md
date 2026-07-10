# 🏠 California House Price Predictor

An end-to-end Machine Learning web application that predicts California house prices using an XGBoost regression model. The project features a FastAPI backend and a React + Tailwind CSS frontend.

---

## 🚀 Features

- Predicts California house prices
- XGBoost Regression model
- FastAPI REST API
- React + Vite frontend
- Responsive Tailwind CSS UI
- Popup displaying predicted price
- Input validation
- StandardScaler preprocessing

---

## 🛠️ Tech Stack

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- XGBoost

### Backend
- FastAPI
- Uvicorn
- Joblib

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

---

## 📂 Project Structure

```
House-Price-Predictor/
│
├── Backend/
│   ├── main.py
│   ├── model.pkl
│   ├── scaler.pkl
│   └── requirements.txt
│
├── Frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### Backend

```bash
cd Backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---


## 📈 Model

- Algorithm: XGBoost Regressor
- Feature Scaling: StandardScaler
- Target Transformation: Log Transformation (`log1p`)
- Categorical Encoding: One-Hot Encoding

---

## 👨‍💻 Author

**Roopesh**