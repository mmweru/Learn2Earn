import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookCollection from './components/BookCollection';
import SplashScreen from './SplashScreen';
import UnlockCareerOpportunitiesPage from './UnlockCareerOpportunitiespage';
import MasterSkillsPage from './MasterSkillsPage';
import './App.css'; // Include if you have additional styles
import NavBar from './components/NavBar/NavBar';
import Search from './components/SearchDiv/Search';
import Value from './components/ValueDiv/Value';
import AppLayout from './layouts/app-layout'; // Import AppLayout
import LandingPage from './pages/landing'; // Import LandingPage component
import Onboarding from './pages/onboarding'; // Import Onboarding component
import { ThemeProvider } from './components/themes-provider'; // Import ThemeProvider
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-jobs';
import MyJobs from './pages/my-jobs';
import About from './pages/about';
import Salary from './pages/salary';
import UpdateJobs from './pages/UpdateJobs';


const App = () => {
  return (
      <Router>
        <div className="bg-gray-100 min-h-screen">
          {/* Navbar Component */}
          <header className="bg-blue-600 text-white py-2 shadow-md">
            <nav className="flex justify-center space-x-6 text-xs md:text-sm">
              <Link to="/books" className="hover:text-orange-300 transition-colors">Books</Link>
              <Link to="/skill-matching" className="hover:text-orange-300 transition-colors">Skill Matching</Link>
              <Link to="/jobs" className="hover:text-orange-300 transition-colors">Jobs</Link> {/* New Jobs link */}
              <Link to="/resume" className="hover:text-orange-300 transition-colors">Resume</Link>
              <Link to="/contact" className="hover:text-orange-300 transition-colors">Contact</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main>
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

              {/* Add routes for Resume and Contact pages if needed */}
              <Route path="/resume" element={<div>Resume Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </main>
        </div>
      </Router>
  );
};

export default App;
