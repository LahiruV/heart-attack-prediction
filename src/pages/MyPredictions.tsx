import { CommonTable } from "../components/Table";
import { useGetPredictionsByUser, useUser } from "../services/queries";

export function MyPredictions() {
    const { data: user } = useUser();

    const { data: tableData } = useGetPredictionsByUser(user?._id);

    const columns = [
        { key: 'age', label: 'Age' },
        {
            key: 'gender',
            label: 'Gender',
            render: (row: any) =>
                row.gender === "1" ? "Male" :
                    row.gender === "0" ? "Female" :
                        "Other"
        },
        { key: 'heartRate', label: 'Heart Rate (bpm)' },
        { key: 'symbolicBloodPressure', label: 'Systolic BP' },
        { key: 'diastolicBloodPressure', label: 'Diastolic BP' },
        { key: 'bloodSugar', label: 'Blood Sugar' },
        { key: 'ckMb', label: 'CK-MB Level' },
        { key: 'troponin', label: 'Troponin Level' },
        {
            key: 'predictionResult',
            label: 'Prediction',
            render: (row: any) => (
                <span
                    className={
                        row.predictionResult.includes("Positive")
                            ? "text-red-600 font-semibold"
                            : "text-green-600 font-semibold"
                    }
                >
                    {row.predictionResult}
                </span>
            )
        }
    ];

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                My Heart Attack History
            </h1>

            <CommonTable
                columns={columns}
                data={tableData ?? []}
                isDisplayPDFButton={false}
            />
        </div>
    );
}