from flask import Flask, request, jsonify
import joblib
import pandas as pd
import numpy as np


app = Flask(__name__)

MODEL_PATH = "heart_attack_rf_model.pkl"
SCALER_PATH = "scaler.pkl"

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

print("Model and Scaler Loaded Successfully")

@app.route('/')
def home():
    return jsonify({"message": "Heart Attack Prediction API is running!"})

@app.route('/predict', methods=['POST'])
def predict():
    try:        
        data = request.get_json()

        expected_features = [
            'Age',
            'Gender',
            'Heart rate',
            'Systolic blood pressure',
            'Diastolic blood pressure',
            'Blood sugar',
            'CK-MB',
            'Troponin'
        ]

        for feature in expected_features:
            if feature not in data:
                return jsonify({"error": f"Missing feature: {feature}"}), 400

        input_df = pd.DataFrame([data])

        input_scaled = scaler.transform(input_df)
        
        prediction = model.predict(input_scaled)[0]
        probability = model.predict_proba(input_scaled)[0][1]

        result = {
            "Prediction": "Heart Attack Risk (Positive)" if prediction == 1 else "No Heart Attack (Negative)",
            "Probability": round(float(probability) * 100, 2)
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
