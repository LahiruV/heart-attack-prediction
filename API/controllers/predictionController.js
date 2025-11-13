exports.savePrediction = async (req, res) => {
    const {
        userID,
        age,
        gender,
        heartRate,
        symbolicBloodPressure,
        diastolicBloodPressure,
        bloodSugar,
        ckMb,
        troponin,
        predictionResult
    } = req.body;

    try {
        const db = await connectDB();
        await db.collection("predictions").insertOne({
            userID,
            age,
            gender,
            heartRate,
            symbolicBloodPressure,
            diastolicBloodPressure,
            bloodSugar,
            ckMb,
            troponin,
            predictionResult
        });
        res.status(201).json({ message: "Prediction saved successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPredictionsByUser = async (req, res) => {
    const { userID } = req.params;
    try {
        const db = await connectDB();
        const predictions = await db.collection("predictions").find({ userID }).toArray();
        res.status(200).json(predictions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};