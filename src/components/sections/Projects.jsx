


function Projects({ title }) {
    return (
        <div className="h-full border-t border-gray-100 flex justify-between p-8">

            <div className="mx-8 bg-white w-full">
                <h1 className="text-4xl font-bold m-8">{title}</h1>
                <div className="bg-white h-full w-full flex items-center justify-between gap-8 p-8">

                    <div className="bg-gray-200 p-1 w-lg h-full rounded-lg">

                        <div className="bg-white w-full h-[50%] rounded-t-lg shadow-lg">
                            <img
                                src="/packnpick.png"
                                alt="Profile"
                                className="w-full h-full rounded-lg"
                            />

                        </div>

                        <div className="bg-gray-100 w-full h-[50%] rounded-b-lg p-4">
                            <h1>PacknPick</h1>
                            <p>I am a beginner developer who enjoys creating simple and responsive web applications</p>
                        </div>

                    </div>

                    <div className="bg-gray-200 p-1 w-lg h-full rounded-lg">

                        <div className="bg-white w-full h-[50%] rounded-t-lg shadow-lg">
                            <img
                                src="/snapserve.png"
                                alt="Profile"
                                className="w-full h-full"
                            />

                        </div>

                        <div className="bg-gray-100 w-full h-[50%] rounded-b-lg p-4">
                            <h1>SnapServe</h1>
                            <p>I am a beginner developer who enjoys creating simple and responsive web applications</p>
                        </div>

                    </div>

                    <div className="bg-gray-200 p-1 w-lg h-full rounded-lg">

                        <div className="bg-white w-full h-[50%] rounded-t-lg shadow-lg">
                            <img
                                src="/wilanguitar.png"
                                alt="Profile"
                                className="w-full h-full"
                            />

                        </div>

                        <div className="bg-gray-100 w-full h-[50%] rounded-b-lg p-4">
                            <h1>WilansGuitar</h1>
                            <p>I am a beginner developer who enjoys creating simple and responsive web applications</p>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Projects