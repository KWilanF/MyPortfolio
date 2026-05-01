import Button from "../common/Button"


function Home({ name, position, profile, subtitle }) {
    return (
        <div className="h-full p-8 flex bg-white items-center border-t border-gray-100">
            <div className="h-full bg-white p-16 mr-24">
                <h1 className="text-5xl mb-4 font-bold">{name}</h1>
                <h5 className="text-lg font-medium">{subtitle}</h5>
                <p className="text-red-400 text-lg font-semibold">{position}</p>
                <div className="w-[100px] h-[1px] bg-red-300 my-1"></div>
                <p className="w-lg my-8">A junior developer who enjoys creating simple and responsive web applications using React and modern web technologies. I am continuously learning and improving my skills by building projects and exploring new tools in web development.</p>

                <Button
                    button="View my works"
                    github="Github"
                />

            </div>

            <div className="bg-white h-80 w-80 rounded-full shadow-lg">
                <img
                    src="/self.png"
                    alt="Profile"
                    className="object-cover rounded-full"
                />
            </div>




        </div>
    )
}

export default Home;