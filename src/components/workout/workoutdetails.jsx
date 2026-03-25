import { useEffect, useState } from "react";

const WorkoutDetails = ({ onLoaded }) => {
    const [workouts, setWorkouts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('API URL:', import.meta.env.VITE_API_URL);
        const fetchWorkouts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`);
                const data = await response.json();

                if (response.ok) {
                    setWorkouts(data);
                } else {
                    setError("Failed to load workouts.");
                }
            } catch (error) {
                console.error('Failed to fetch workouts:', error);
                setError("Something went wrong. Please try again.");
            } finally {
                setIsLoading(false);
                onLoaded?.();
            }
        };

        fetchWorkouts();
    }, []);

    // Loading State
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-gray-400 text-sm tracking-wide">Fetching workouts...</p>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
                <p className="text-red-400 font-medium">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="text-sm text-indigo-500 hover:text-indigo-700 font-semibold transition-colors"
                >
                    Try again
                </button>
            </div>
        );
    }

    // Empty State
    if (!workouts || workouts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
                <p className="text-gray-400 text-sm">No workouts found.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {workouts.map((workout, index) => (
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
    );
};

export default WorkoutDetails;