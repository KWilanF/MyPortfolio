import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";

function About({ title }) {
    return (
        <div className="h-full border-t border-gray-100 flex justify-between p-8">

            <div className="w-[40%] mx-8">
                <h1 className="text-4xl font-bold m-8">{title}</h1>
                <p className="mb-8">I am a passionate and continuously growing developer with hands-on experience in both frontend and backend development. I enjoy building practical and functional applications using modern technologies such as React and the MERN stack, as well as mobile development. I focus on writing clean, structured code and applying best practices and architectural patterns in real-world projects and applications.
                </p>
                <p>
                    I am driven by continuous learning and improving through real projects and challenges. I enjoy solving problems, enhancing user experience, and refining system design as I grow from a junior to a more advanced developer. My goal is to become a well-rounded full stack developer capable of building scalable, efficient, and user-friendly applications from start to finish.
                </p>

                <button className="border border-black text-red-500 rounded-full p-2 font-bold my-4">Resume</button>

            </div>

            <div className="w-[40%] mx-8 flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold mb-24">
                    Technologies I've been working on recently:
                </h1>

                <div className="grid grid-cols-3 gap-4 place-items-center">

                    <div className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300">
                        <FaReact className="text-sky-300" />
                        React JS
                    </div>

                    <div className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300">
                        <SiExpress className="text-green-400" />
                        Express JS
                    </div>

                    <div className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300">
                        <SiTailwindcss className="text-sky-500" />
                        TailwindCSS
                    </div>

                    <div className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300">
                        <FaNodeJs className="text-green-200" />
                        Node JS
                    </div>

                    <div className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300">
                        <SiMongodb className="text-green-400" />
                        MongoDB Atlas
                    </div>

                    <div className="bg-black text-white py-2 px-3 rounded-lg flex items-center gap-2 hover:scale-105 transition duration-300">
                        <FaGitAlt className="text-red-400" />
                        Git
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;