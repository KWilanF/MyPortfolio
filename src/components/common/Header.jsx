import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaBars, FaTimes } from "react-icons/fa";

function Header({ logo, navbar }) {
    const [activeNav, setActiveNav] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`);
                });
            },
            { threshold: 0.6 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white px-6 md:px-16 py-4 z-50 shadow-sm">
            <h1 className="text-lg font-semibold">{logo}</h1>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4">
                    {navbar.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href}
                                onClick={() => setActiveNav(item.href)}
                                className={`transition-colors duration-200 ${
                                    activeNav === item.href
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

            {/* Desktop Social Icons */}
            <div className="hidden md:flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-gray-600 w-5 h-5 hover:scale-110 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-500 w-5 h-5 hover:scale-110 transition" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-500 w-5 h-5 hover:scale-110 transition" />
                </a>
            </div>

            {/* Hamburger Button */}
            <button
                className="md:hidden text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden">
                    {navbar.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => {
                                setActiveNav(item.href);
                                setMenuOpen(false);
                            }}
                            className={`text-base transition-colors duration-200 ${
                                activeNav === item.href
                                    ? "text-red-500 font-bold"
                                    : "text-gray-700 hover:text-red-400"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="flex gap-5 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-gray-600 w-5 h-5" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-gray-500 w-5 h-5" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-500 w-5 h-5" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;