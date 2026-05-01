import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";

function About({ title }) {
    return (
        <div className="min-h-full border-t border-gray-100 flex flex-col lg:flex-row justify-between p-6 md:p-8 gap-8">
            <div className="w-full lg:w-[45%] mx-0 lg:mx-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
                <p className="mb-6 text-sm md:text-base">
                    I am a passionate and continuously growing developer with hands-on experience
                    in both frontend and backend development. I enjoy building practical and
                    functional applications using modern technologies such as React and the MERN
                    stack, as well as mobile development.
                </p>
                <p className="text-sm md:text-base">
                    I am driven by continuous learning and improving through real projects and
                    challenges. My goal is to become a well-rounded full stack developer capable
                    of building scalable, efficient, and user-friendly applications from start to finish.
                </p>
                <a  
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black text-red-500 rounded-full p-2 px-4 font-bold my-4 inline-block"
                >
                    Resume
                </a>
            </div>

            <div className="w-full lg:w-[45%] mx-0 lg:mx-8 flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl font-bold mb-8 md:mb-12 text-center">
                    Technologies I've been working on recently:
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
                    {[
                        { icon: <FaReact className="text-sky-300" />, label: "React JS" },
                        { icon: <SiExpress className="text-green-400" />, label: "Express JS" },
                        { icon: <SiTailwindcss className="text-sky-500" />, label: "TailwindCSS" },
                        { icon: <FaNodeJs className="text-green-200" />, label: "Node JS" },
                        { icon: <SiMongodb className="text-green-400" />, label: "MongoDB Atlas" },
                        { icon: <FaGitAlt className="text-red-400" />, label: "Git" },
                    ].map(({ icon, label }) => (
                        <div
                            key={label}
                            className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300 text-sm w-full justify-center"
                        >
                            {icon}
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;