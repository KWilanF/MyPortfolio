import { FaGithub } from "react-icons/fa";

function Button({ button, github }) {
    return (
        <div className="flex gap-3 items-center">
            <button className="bg-black text-white text-sm p-2 px-4 rounded-full">
                {button}
            </button>

            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 border border-black text-black text-sm p-2 px-4 rounded-full"
            >
                <FaGithub className="text-gray-600 w-4 h-4" />
                {github}
            </a>
        </div>
    );
}

export default Button;