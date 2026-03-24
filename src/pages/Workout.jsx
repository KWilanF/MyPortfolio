import Header from "../components/common/Header";
import WorkoutDetails from "../components/workout/workoutdetails";

const Workout = () => {
   


    return (
        <div className="min-h-screen bg-white sm:px-6 lg:px-8">
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-4 ">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Workouts
                    </h1>
                </div>

                <WorkoutDetails />

                


            </div>
        </div>
    )
}

export default Workout;