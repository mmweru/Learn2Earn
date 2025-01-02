import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookCollection from "./components/BookCollection";
import SplashScreen from "./SplashScreen";
import UnlockCareerOpportunitiesPage from "./UnlockCareerOpportunitiespage";
import MasterSkillsPage from "./MasterSkillsPage";
import "./App.css"; // Include additional styles if necessary
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import SavedJobs from "./pages/saved-jobs";
import Resume from "./components/ResumePage";
import BlogPost from './components/BlogPost'; // Adjust path as needed

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Navbar Component */}
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4 py-3">
            {/* Logo */}
            <Link to="/" className="text-lg font-bold">
              CareerHub
            </Link>

            {/* Hamburger Menu for Small Screens */}
            <button
              className="text-white md:hidden focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Navigation Links for larger screens */}
            <nav className="hidden md:flex md:space-x-6 text-sm font-medium">
              <Link
                to="/books"
                className="text-gray-100 hover:text-orange-300 transition-colors"
              >
                Books
              </Link>
              <Link
                to="/skill-matching"
                className="text-gray-100 hover:text-orange-300 transition-colors"
              >
                Skill Matching
              </Link>
              <Link
                to="/jobs"
                className="text-gray-100 hover:text-orange-300 transition-colors"
              >
                Jobs
              </Link>
              <Link
                to="/resume"
                className="text-gray-100 hover:text-orange-300 transition-colors"
              >
                Resume
              </Link>
            </nav>
          </div>

          {/* Slide-in Menu for Small Screens */}
          {menuOpen && (
            <div className="fixed top-15 right-0 w-2/3 h-1/2 bg-white shadow-lg z-50">
              <button
                className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className="mt-16 flex flex-col items-start space-y-4 px-6">
                <Link
                  to="/books"
                  className="text-blue-600 hover:text-orange-500 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Books
                </Link>
                <Link
                  to="/skill-matching"
                  className="text-blue-600 hover:text-orange-500 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Skill Matching
                </Link>
                <Link
                  to="/jobs"
                  className="text-blue-600 hover:text-orange-500 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Jobs
                </Link>
                <Link
                  to="/resume"
                  className="text-blue-600 hover:text-orange-500 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/skill-matching" element={<UnlockCareerOpportunitiesPage />} />
            <Route path="/masterskills" element={<MasterSkillsPage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/book-collection" element={<BookCollection />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog/blog-3-free-training-job-placement" element={<BlogPost />} />
            <Route path="/jobs" element={<SavedJobs/>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;