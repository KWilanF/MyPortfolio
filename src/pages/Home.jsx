import { Link } from 'react-router-dom'
import Header from '../components/common/Header'

const Home = () => {
    return (
        <div className="min-h-screen bg-white sm:px-6 lg:px-8">
            <Header />
            
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    
                    {/* Text Content */}
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                            Kent Wilan Fegarido
                            
                            <span className="block text-2xl text-gray-500 font-normal mt-2">
                                Frontend Developer
                            </span>
                        </h1>
                        
                        <div className="w-20 h-1 bg-black mb-6"></div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            I craft digital experiences that are fast, accessible, and beautiful. 
                            Specializing in React and modern web technologies.
                        </p>
                        
                        <div className="flex gap-4">
                            <Link 
                                to="/projects" 
                                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Projects
                            </Link>
                            <a 
                                href="/resume.pdf" 
                                className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-900 transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white">
                            <img 
                                src="/self.png" 
                                alt="Kwilanf" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Quick Links */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <div className="flex justify-center gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Email</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home