import Header from "../components/common/Header";
import WorkoutDetails from "../components/workout/workoutdetails";
import Workform from "../components/workout/workform"
import { useState } from "react";

const Workout = () => {
    const [addworkout, setaddworkout] = useState(false);


    return (
        <div className="min-h-screen bg-white sm:px-6 lg:px-8">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-4 ">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Workouts
                    </h1>
                    <button
                        onClick={() => setaddworkout(!addworkout)}
                        className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-sm font-semibold tracking-wide px-5 py-2.5 rounded-xl shadow-md shadow-indigo-200 transition-all duration-200"
                    >
                        <span className="text-lg leading-none">{addworkout ? "×" : "+"}</span>
                        {addworkout ? "Cancel" : "Add Workout"}
                    </button>
                </div>
                <div>
                    {addworkout && <Workform />}

                    <WorkoutDetails />
                </div>




            </div>
        </div>
    )
}

export default Workout;