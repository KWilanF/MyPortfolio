const Workform = () => {
    return (
        <div className="mt-8 mb-6">
            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8 shadow-sm max-w-md mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                        New Entry
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1">
                        Add Workout
                    </h2>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-5">

                    {/* Exercise Title */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                            Exercise
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Push Up"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                        />
                    </div>

                    {/* Reps & Load side by side */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Reps
                            </label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Load (kg)
                            </label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-semibold text-sm tracking-wide py-3 rounded-xl transition-all duration-200 shadow-md shadow-indigo-200"
                    >
                        + Add Workout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Workform;