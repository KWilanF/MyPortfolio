export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* HERO */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            BSIT Frontend Developer
          </h1>
          <p className="text-lg">
            HTML • Tailwind CSS • JavaScript • React.js
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a <strong>Bachelor of Science in Information Technology (BSIT)</strong> student
            with a strong interest in <strong>frontend development</strong>. I enjoy building
            responsive and user-friendly web applications using modern web
            technologies and continuously improving both my technical and soft skills.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Frontend Development</li>
                <li>HTML</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Adaptability and willingness to learn</li>
                <li>Communication skills</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="border p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">
                Wilans Guitar
              </h3>
              <p className="text-gray-700 mb-3">
                A web-based application designed for managing and displaying
                guitar-related content with a clean and responsive user interface.
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Technologies:</strong> HTML, Tailwind CSS, JavaScript, React.js
              </p>
              <a
                href="https://wilansguitar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="border p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">
                Stores Inventory System
              </h3>
              <p className="text-gray-700 mb-3">
                A simple inventory management system that allows users to manage
                store items efficiently using a web-based interface.
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Technologies:</strong> HTML, Tailwind CSS, JavaScript, React.js
              </p>
              <a
                href="https://storesinventory.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2025 BSIT Portfolio</p>
      </footer>
    </div>
  );
}
