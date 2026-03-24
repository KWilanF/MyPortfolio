import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
    { to: '/workouts', label: 'Workouts' },
  ]

  const activeStyle = { color: 'red' }
  const inactiveStyle = { color: 'inherit' }

  return (
    <header className="max-w-6xl mx-auto px-6 py-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-light tracking-tight z-50">
          <span className="font-bold">K</span>wilanf
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest text-gray-700">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
              className="hover:text-red-500 transition-colors uppercase"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-3">
          <SocialIcons />
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden z-50 flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col gap-4 py-4 border-t border-gray-100 text-sm font-medium tracking-widest text-gray-700">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
              className="uppercase hover:text-red-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Social Icons */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <SocialIcons />
        </div>
      </div>
    </header>
  )
}

const SocialIcons = () => (
  <>
    {/* GitHub */}
    <a href="#" className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.34 4.687-4.57 4.935.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    </a>
    {/* Twitter */}
    <a href="#" className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    </a>
    {/* LinkedIn */}
    <a href="#" className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>
  </>
)

export default Header