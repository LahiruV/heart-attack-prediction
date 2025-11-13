import React, { useState } from "react"
import { X, Loader2 } from "lucide-react"
import { useSavePrediction } from "../services/queries"

interface PredictFormModalProps {
    isOpen: boolean
    onClose: () => void
}

export function PredictFormModal({ isOpen, onClose }: PredictFormModalProps) {
    const { mutate: savePredictionMutate } = useSavePrediction()
    const [formData, setFormData] = useState({
        Age: "",
        Gender: "",
        "Heart rate": "",
        "Systolic blood pressure": "",
        "Diastolic blood pressure": "",
        "Blood sugar": "",
        "CK-MB": "",
        Troponin: "",
    })
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<{ Prediction: string; Probability: number } | null>(null)
    const [error, setError] = useState<string | null>(null)

    if (!isOpen) return null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setResult(null)
        try {
            const res = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Age: Number(formData.Age),
                    Gender: Number(formData.Gender),
                    "Heart rate": Number(formData["Heart rate"]),
                    "Systolic blood pressure": Number(formData["Systolic blood pressure"]),
                    "Diastolic blood pressure": Number(formData["Diastolic blood pressure"]),
                    "Blood sugar": Number(formData["Blood sugar"]),
                    "CK-MB": Number(formData["CK-MB"]),
                    Troponin: Number(formData.Troponin),
                }),
            })

            const data = await res.json()
            if (res.ok) {
                setResult(data)
            } else {
                setError(data.error || "Something went wrong.")
            }
            const savePayload = {
                userID: "current-user-id",
                age: formData.Age.toString(),
                gender: formData.Gender.toString(),
                heartRate: formData["Heart rate"].toString(),
                symbolicBloodPressure: formData["Systolic blood pressure"].toString(),
                diastolicBloodPressure: formData["Diastolic blood pressure"].toString(),
                bloodSugar: formData["Blood sugar"].toString(),
                ckMb: formData["CK-MB"].toString(),
                troponin: formData["Troponin"].toString(),
                predictionResult: data.Prediction.toString(),
            }
            savePredictionMutate(savePayload, {
                onSuccess: () => {
                    setFormData({
                        Age: "",
                        Gender: "",
                        "Heart rate": "",
                        "Systolic blood pressure": "",
                        "Diastolic blood pressure": "",
                        "Blood sugar": "",
                        "CK-MB": "",
                        Troponin: "",
                    });
                },
                onError: (error: any) => {
                    console.log('Error saving prediction:', error);
                }
            })
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Heart Attack Prediction</h2>

                <form onSubmit={handleSubmit} className="space-y-3" style={{
                    maxHeight: '75vh',
                    overflowY: 'auto'
                }}>
                    {Object.keys(formData).map((key) => (
                        <div key={key}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{key}</label>
                            {key === "Gender" ? (
                                <select
                                    name="Gender"
                                    value={formData.Gender}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            ) : (
                                <input
                                    type="number"
                                    name={key}
                                    value={(formData as any)[key]}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                                />
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md flex justify-center items-center"
                    >
                        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Predict"}
                    </button>
                </form>

                {error && <p className="text-red-500 text-center mt-3">{error}</p>}

                {result && (
                    <div className="mt-5 text-center bg-gray-50 p-3 rounded-md">
                        <p className="font-semibold text-gray-800">{result.Prediction}</p>
                        <p className="text-sm text-gray-600">Probability: {result.Probability}%</p>
                    </div>
                )}
            </div>
        </div>
    )
}
