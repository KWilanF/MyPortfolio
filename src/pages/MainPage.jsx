import Header from "../components/common/Header";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";

function Main() {
    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-10">
                <Header
                    logo="KwilanF"
                    navbar={[
                        { label: "Home", href: "#home" },
                        { label: "About", href: "#about" },
                        { label: "Projects", href: "#projects" },
                        { label: "Contact", href: "#contact" },
                    ]}
                />
            </div>

            <main className="bg-white pt-16">
                <section id="home" className="scroll-mt-16 min-h-screen">
                    <Home
                        subtitle="Junior"
                        name="Kent Wilan Fegarido"
                        position="Frontend Developer"
                    />
                </section>

                <section id="about" className="scroll-mt-16 min-h-screen">
                    <About title="About me" />
                </section>

                <section id="projects" className="scroll-mt-16 min-h-screen">
                    <Projects title="Some Things I Build" />
                </section>

                <section id="contact" className="scroll-mt-16 min-h-screen p-8 border-t border-gray-100">
                    <h3 className="text-3xl font-bold mb-4">Contact</h3>
                    <p>This section contains my contact information.</p>
                </section>
            </main>
        </div>
    );
}

export default Main;