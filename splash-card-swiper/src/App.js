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
import JobListing from "./pages/job-listing";
import JobPage from "./pages/job";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-jobs";
import MyJobs from "./pages/my-jobs";
import About from "./pages/about";
import Salary from "./pages/salary";
import UpdateJobs from "./pages/UpdateJobs";
import Resume from "./components/ResumePage";

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
              onClick={() => setMenuOpen((prev) => !prev)}
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

            {/* Navigation Links */}
            <nav
              className={`${
                menuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 text-sm font-medium`}
            >
              <Link
                to="/books"
                className="block md:inline text-gray-100 hover:text-orange-300 transition-colors"
              >
                Books
              </Link>
              <Link
                to="/skill-matching"
                className="block md:inline text-gray-100 hover:text-orange-300 transition-colors"
              >
                Skill Matching
              </Link>
              <Link
                to="/jobs"
                className="block md:inline text-gray-100 hover:text-orange-300 transition-colors"
              >
                Jobs
              </Link>
              <Link
                to="/resume"
                className="block md:inline text-gray-100 hover:text-orange-300 transition-colors"
              >
                Resume
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Splash Screen */}
            <Route path="/" element={<SplashScreen />} />

            {/* Unlock Career Opportunities Page */}
            <Route path="/skill-matching" element={<UnlockCareerOpportunitiesPage />} />

            {/* Master Skills Page */}
            <Route path="/masterskills" element={<MasterSkillsPage />} />

            {/* Book Recommendations Page */}
            <Route path="/books" element={<BookList />} />

            {/* Book Collection Page */}
            <Route path="/book-collection" element={<BookCollection />} />

            {/* Resume Page */}
            <Route path="/resume" element={<Resume />} />

            {/* Jobs Section with nested routes */}
            <Route
              path="/jobs"
              element={<AppLayout />} // Render AppLayout for the jobs section
            >
              <Route index element={<LandingPage />} /> {/* Default route */}
              <Route path="about" element={<About />} />
              <Route path="vjobs" element={<JobListing />} />
              <Route path="job/:id" element={<JobPage />} />
              <Route path="post-job" element={<PostJob />} />
              <Route path="saved-job" element={<SavedJobs />} />
              <Route path="my-jobs" element={<MyJobs />} />
              <Route path="salary" element={<Salary />} />
              <Route path="edit-jobs/:id" element={<UpdateJobs />} />
            </Route>

            {/* Contact Page */}
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>


      </div>
    </Router>
  );
};

export default App;
