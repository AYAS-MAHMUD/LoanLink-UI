// src/Pages/ErrorPage.jsx
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center px-4">
      {/* Glowing 404 Text */}
      <h1 className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(255,0,150,0.6)] animate-pulse">
        404
      </h1>

      {/* Subtext */}
      <h2 className="text-3xl font-semibold mb-3 tracking-wide">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
        The page you’re looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        🔙 Back to Home
      </Link>

      {/* Floating Animation Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-500 animate-pulse">
        © 2025 | Designed by AYAS ✨
      </div>
    </div>
  );
}