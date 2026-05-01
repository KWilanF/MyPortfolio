import Button from "../common/Button";

function Home({ name, position, subtitle }) {
    return (
        <div className="min-h-full p-6 md:p-8 flex flex-col md:flex-row bg-white items-center border-t border-gray-100 gap-8">
            {/* Text content */}
            <div className="bg-white p-6 md:p-16 text-center md:text-left order-2 md:order-1">
                <h1 className="text-3xl md:text-5xl mb-4 font-bold">{name}</h1>
                <h5 className="text-lg font-medium">{subtitle}</h5>
                <p className="text-red-400 text-lg font-semibold">{position}</p>
                <div className="w-[100px] h-[1px] bg-red-300 my-1 mx-auto md:mx-0"></div>
                <p className="max-w-lg my-8 text-sm md:text-base">
                    A junior developer who enjoys creating simple and responsive web applications
                    using React and modern web technologies. I am continuously learning and improving
                    my skills by building projects and exploring new tools in web development.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Button button="View my works" github="Github" />
                </div>
            </div>

            {/* Profile image */}
            <div className="bg-white h-52 w-52 md:h-80 md:w-80 rounded-full shadow-lg flex-shrink-0 order-1 md:order-2">
                <img
                    src="/self.png"
                    alt="Profile"
                    className="object-cover rounded-full w-full h-full"
                />
            </div>
        </div>
    );
}

export default Home;