import React from "react"
import Header from "../components/common/Header"
import Home from "../components/sections/Home"
import About from "../components/sections/About";
import Projects from '../components/sections/Projects'

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
                        { label: "Contact", href: "#contact" }
                    ]}
                    socialLinks={[
                        { name: "Twitter", href: "#" },
                        { name: "LinkedIn", href: "#" }
                    ]}
                />
            </div>

           

                <main className="bg-white mt-15">

                    <section id="home" className="scroll-mt-20 mt-8 mb-16 h-128 bg-white">
                        <Home
                            subtitle="Junior"
                            name="Kent Wilan Fegarido"
                            position="Frontend Developer"
                        />
                    </section>

                    <section id="about" className="scroll-mt-20 mb-16 h-128 bg-white">
                        <About 
                        title="About me"
                        />
                    </section>

                    <section id="projects" className="scroll-mt-20  mb-16 mt-8 h-128 bg-white">
                        <Projects
                        title="Some Thing's I Build"
                        />
                    </section>

                    <section id="contact" className="scroll-mt-20  mb-16 mt-8 h-128 bg-white">
                        <h3>Contact</h3>
                        <p>This section contains my contact information.</p>
                    </section>

                </main>
           

        </div>
    )
}

export default Main;