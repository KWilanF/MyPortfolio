function Projects({ title }) {
    const projects = [
        { name: "PacknPick", img: "/packnpick.png" },
        { name: "SnapServe", img: "/snapserve.png" },
        { name: "WilansGuitar", img: "/wilanguitar.png" },
    ];

    return (
        <div className="min-h-full border-t border-gray-100 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(({ name, img }) => (
                    <div key={name} className="bg-gray-200 p-1 rounded-lg flex flex-col">
                        <div className="bg-white rounded-t-lg overflow-hidden h-48">
                            <img src={img} alt={name} className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-gray-100 rounded-b-lg p-4">
                            <h2 className="font-semibold mb-1">{name}</h2>
                            <p className="text-sm text-gray-600">
                                A beginner developer who enjoys creating simple and responsive web applications.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;