import Header from "../components/Header";

const Project = () => {
    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        My Projects
                    </h1>
                    <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                   
                </div>
            </div>
        </div>
    )
}

export default Project;