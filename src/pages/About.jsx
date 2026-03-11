import Header from "../components/Header";

const About = () => {
    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About Me
                    </h1>
                    <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        I am a passionate developer who enjoys building modern web applications
                        and continuously learning new technologies to improve my skills.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;