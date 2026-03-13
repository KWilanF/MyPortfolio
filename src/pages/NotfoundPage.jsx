import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
      
      <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-red-500">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-gray-800 transition"
      >
        Go Back
      </Link>

    </div>
  );
}