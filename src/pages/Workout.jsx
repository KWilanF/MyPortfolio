import { useEffect, useState } from "react";
import Header from "../components/common/Header";

const Workout = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
         console.log('API URL:', import.meta.env.VITE_API_URL)
        const fetchWorkouts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`);
                const data = await response.json();

                if (response.ok) {
                    setWorkouts(data);
                }
            } catch (error) {
                console.error('Failed to fetch workouts:', error);
            }
        };

        fetchWorkouts();
    }, []);


    return (
        <div className="min-h-screen bg-white sm:px-6 lg:px-8">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-4 ">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Workouts
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {workouts && workouts.map((workout, index) => (
                        <div
                            key={workout._id}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                                    Workout #{index + 1}
                                </span>
                                <span className="bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full">
                                    Active
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                                {workout.title}
                            </h2>

                            {/* Divider */}
                            <div className="border-t border-gray-100 mb-4" />

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-2xl font-bold text-gray-900">{workout.reps}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Reps</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-2xl font-bold text-gray-900">{workout.load}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Load (kg)</p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-xs text-gray-400">
                                    {new Date(workout.createdAt).toLocaleDateString('en-US', {
                                        month: 'short', day: 'numeric', year: 'numeric'
                                    })}
                                </p>
                                <button className="text-xs font-semibold text-indigo-500 hover:text-indigo-700 transition-colors">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Workout;