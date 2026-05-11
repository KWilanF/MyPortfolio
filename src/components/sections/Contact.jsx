import { FaGithub, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <footer
            id="contact"
            className="bg-white px-6 md:px-16 py-14"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* Left Side */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Let’s Connect
                    </h1>

                    <p className="text-gray-600 max-w-md leading-relaxed">
                        I’m open to opportunities, collaborations, and learning experiences
                        in web and mobile development. Feel free to contact me through my
                        social platforms or email.
                    </p>

                    <div className="w-24 h-[2px] bg-red-400 mt-6"></div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-4">

                    <a
                        href="mailto:your@email.com"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:shadow-md hover:-translate-y-1 transition duration-300"
                    >
                        <div className="bg-gray-100 p-3 rounded-full">
                            <FaEnvelope className="text-xl text-red-400" />
                        </div>

                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-gray-500">
                                kentwilanfegarido@gmail.com
                            </p>
                        </div>
                    </a>

                    <a
                        href="tel:+639282748590"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:shadow-md hover:-translate-y-1 transition duration-300"
                    >
                        <div className="bg-gray-100 p-3 rounded-full">
                            <FaPhone className="text-xl text-red-400" />
                        </div>

                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-sm text-gray-500">
                                +63 9282748590
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:shadow-md hover:-translate-y-1 transition duration-300"
                    >
                        <div className="bg-gray-100 p-3 rounded-full">
                            <FaGithub className="text-xl text-red-400" />
                        </div>

                        <div>
                            <h3 className="font-semibold">GitHub</h3>
                            <p className="text-sm text-gray-500">
                                github.com/KWilanF
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:shadow-md hover:-translate-y-1 transition duration-300"
                    >
                        <div className="bg-gray-100 p-3 rounded-full">
                            <FaFacebook className="text-xl text-red-400" />
                        </div>

                        <div>
                            <h3 className="font-semibold">Facebook</h3>
                            <p className="text-sm text-gray-500">
                                facebook.com/Kent Wilan Fegarido
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
                © 2026 Kent Wilan Fegarido. All rights reserved.
            </div>
        </footer>
    );
}

export default Contact;