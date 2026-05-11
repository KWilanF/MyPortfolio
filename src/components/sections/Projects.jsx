function Projects({ title }) {
    const projects = [
        {
            name: "PacknPick",
            img: "/packnpick.png",
            note: "A personal project focused on developing a simple and responsive web application for users.",
            link: "https://packnpick.vercel.app/",
        },
        {
            name: "SnapServe",
            img: "/snapserve.png",
            note: "A project developed during my on-the-job training at Cube Tech Innovations, where I contributed to web development and system features.",
            link: "https://lite-test.snapserve.cubetech.cloud/",
        },
        {
            name: "WilansGuitar",
            img: "/wilanguitar.png",
            note: "A personal guitar application project designed to help users learn and manage guitar songs and chords.",
            link: "https://wilansguitar.vercel.app/",
        },
    ];

    return (
        <div className="min-h-full border-t border-gray-100 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(({ name, img, note, link }) => (
                    <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 p-1 rounded-lg flex flex-col hover:scale-105 duration-300 cursor-pointer"
                    >
                        <div className="bg-white rounded-t-lg overflow-hidden h-48">
                            <img
                                src={img}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="bg-gray-100 rounded-b-lg p-4">
                            <h2 className="font-semibold mb-1">{name}</h2>

                            <p className="text-sm text-gray-600">
                                {note}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;