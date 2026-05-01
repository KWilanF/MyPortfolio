import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"



function Header({ logo, navbar, socialLinks }) {
    const [activeNav, setActiveNav] = useState("#home")

    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveNav(`#${entry.target.id}`);
                    }

                });

            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);

    return (
        <div className=" fixed top-0 left-0 right-0 flex items-center justify-between bg-white px-16 py-4">
            <h1 className="text-lg">{logo}</h1>
            <nav>
                <ul className="flex space-x-4">

                    {navbar.map((item, index) => (

                        <li key={index}>

                            <a
                                href={item.href}
                                onClick={() => setActiveNav(item.href)}
                                className={`transition-colors duration-200
                                    ${activeNav === item.href
                                        ? "text-red-500 font-bold"
                                        : "text-gray-700 hover:text-red-400"
                                    }`}
                            >
                                {item.label}
                            </a>

                        </li>

                    ))}

                </ul>
            </nav>
            <div className="flex gap-4 mr-8">

                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-gray-600 w-5 h-5 hover:scale-110 transition" />
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="text-gray-500 w-5 h-5 hover:scale-110 transition" />
                </a>

                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-gray-500 w-5 h-5 hover:scale-110 transition" />
                </a>

            </div>
        </div>
    )
}
export default Header;