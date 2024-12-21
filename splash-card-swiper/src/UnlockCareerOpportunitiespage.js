import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// Expanded options for dropdowns
const professions = [
  'Musician', 'Software Developer', 'Chef', 'Football Player', 'Teacher', 'Entrepreneur', 
  'Plumber', 'Carpenter', 'Mason', 'Hairdresser', 'Electrician', 'Mechanic', 'Nurse'
];
const interests = [
  'Football', 'Music', 'Technology', 'Cooking', 'Teaching', 'Business', 
  'Construction', 'Hairdressing', 'Plumbing', 'Mechanical Work', 'Healthcare'
];
const workEnvironments = ['Office', 'Outdoor', 'Studio', 'Home', 'Lab', 'Workshop'];

const careerOptions = {
  Football: ['Football Coach', 'Sports Analyst', 'Physical Therapist'],
  Music: ['Music Teacher', 'Music Therapist', 'Music Producer'],
  Technology: ['Software Engineer', 'Data Scientist', 'UI/UX Designer'],
  Cooking: ['Chef', 'Food Critic', 'Culinary Instructor'],
  Business: ['Entrepreneur', 'Business Analyst', 'Marketing Manager'],
  Construction: ['Plumber', 'Carpenter', 'Mason'],
  Hairdressing: ['Hairdresser', 'Salon Owner'],
  Mechanical: ['Mechanic', 'Automotive Engineer'],
  Healthcare: ['Nurse', 'Healthcare Specialist']
};

// Dummy tutorial videos
const tutorialVideos = {
  'Football Coach': 'https://example.com/football-coach-tutorial.mp4',
  'Sports Analyst': 'https://example.com/sports-analyst-tutorial.mp4',
  'Physical Therapist': 'https://example.com/physical-therapist-tutorial.mp4',
  'Music Teacher': 'https://example.com/music-teacher-tutorial.mp4',
  'Music Therapist': 'https://example.com/music-therapist-tutorial.mp4',
  'Music Producer': 'https://example.com/music-producer-tutorial.mp4',
  'Software Engineer': 'https://example.com/software-engineer-tutorial.mp4',
  'Data Scientist': 'https://example.com/data-scientist-tutorial.mp4',
  'UI/UX Designer': 'https://example.com/ui-ux-designer-tutorial.mp4',
  'Chef': 'https://example.com/chef-tutorial.mp4',
  'Food Critic': 'https://example.com/food-critic-tutorial.mp4',
  'Culinary Instructor': 'https://example.com/culinary-instructor-tutorial.mp4',
  'Entrepreneur': 'https://example.com/entrepreneur-tutorial.mp4',
  'Business Analyst': 'https://example.com/business-analyst-tutorial.mp4',
  'Marketing Manager': 'https://example.com/marketing-manager-tutorial.mp4',
  'Plumber': 'https://example.com/plumber-tutorial.mp4',
  'Carpenter': 'https://example.com/carpenter-tutorial.mp4',
  'Mason': 'https://example.com/mason-tutorial.mp4',
  'Hairdresser': 'https://example.com/hairdresser-tutorial.mp4',
  'Salon Owner': 'https://example.com/salon-owner-tutorial.mp4',
  'Mechanic': 'https://example.com/mechanic-tutorial.mp4',
  'Automotive Engineer': 'https://example.com/automotive-engineer-tutorial.mp4',
  'Nurse': 'https://example.com/nurse-tutorial.mp4',
  'Healthcare Specialist': 'https://example.com/healthcare-specialist-tutorial.mp4'
};

const matchTopCareers = (interests, goals, skills) => {
  let matchedCareers = [];

  interests.forEach(interest => {
    if (careerOptions[interest]) {
      matchedCareers = [...matchedCareers, ...careerOptions[interest]];
    }
  });

  goals.forEach(goal => {
    if (careerOptions[goal]) {
      matchedCareers = [...matchedCareers, ...careerOptions[goal]];
    }
  });

  // Removing duplicates
  matchedCareers = [...new Set(matchedCareers)];

  // Filter based on skills if necessary (e.g., leadership, technical skills)
  if (skills.includes('leadership')) {
    matchedCareers = matchedCareers.filter(career => career.includes('Manager') || career.includes('Lead'));
  }

  // Ensure no duplicates and limit to top 3
  matchedCareers = matchedCareers.slice(0, 3);

  return matchedCareers.length ? matchedCareers : ['Career Consultant', 'Professional Coach', 'Event Coordinator'];
};

const generateAdditionalQuestions = (interests, goals) => {
  const questions = [];

  if (interests.includes('Technology')) {
    questions.push('What specific technology interests you the most?');
  }

  if (goals.includes('Entrepreneur')) {
    questions.push('What kind of business are you interested in starting?');
  }

  // Add more questions based on other interests and goals
  return questions;
};

const UnlockCareerOpportunitiesPage = () => {
  const [userDetails, setUserDetails] = useState({
    profession: '',
    interests: [],
    goals: '',
    skills: '',
    preferredWorkEnvironment: ''
  });
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [tutorialVideo, setTutorialVideo] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: selectedOptions
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const goalsArray = userDetails.goals.split(',').map(goal => goal.trim());
    const questions = generateAdditionalQuestions(userDetails.interests, goalsArray);
    const topCareers = matchTopCareers(userDetails.interests, goalsArray, userDetails.skills);
  
    // Set the tutorial video based on the top career
    if (topCareers.length > 0) {
      const firstCareer = topCareers[0]; // Just use the first career for simplicity
      setTutorialVideo(tutorialVideos[firstCareer] || '');
    }
  
    // Navigate to /masterskills with state
    navigate('/masterskills', { state: { topCareers, additionalQuestions } });
  };  

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">

      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-800 mb-6 lg:mb-8 text-center">
          Unlock Career Opportunities
        </h1>
          <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="mb-6">
            <label className="block text-blue-800 font-bold mb-2">Your Profession:</label>
            <select
              name="profession"
              value={userDetails.profession}
              onChange={handleInputChange}
              className="w-full p-4 border border-blue-300 rounded-md text-blue-800"
            >
              <option value="">Select your profession</option>
              {professions.map((profession) => (
                <option key={profession} value={profession}>{profession}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-blue-800 font-bold mb-2">Your Interests:</label>
            <select
              name="interests"
              multiple
              value={userDetails.interests}
              onChange={handleMultiSelectChange}
              className="w-full p-4 border border-blue-300 rounded-md text-blue-800"
            >
              {interests.map((interest) => (
                <option key={interest} value={interest}>{interest}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-blue-800 font-bold mb-2">Your Career Goals:</label>
            <input
              type="text"
              name="goals"
              value={userDetails.goals}
              onChange={handleInputChange}
              placeholder="e.g., Become a Software Engineer, Start a business, Become a Music Producer"
              className="w-full p-4 border border-blue-300 rounded-md text-blue-800"
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-800 font-bold mb-2">Skills (comma-separated):</label>
            <input
              type="text"
              name="skills"
              value={userDetails.skills}
              onChange={handleInputChange}
              className="w-full p-4 border border-blue-300 rounded-md text-blue-800"
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-800 font-bold mb-2">Preferred Work Environment:</label>
            <select
              name="preferredWorkEnvironment"
              value={userDetails.preferredWorkEnvironment}
              onChange={handleInputChange}
              className="w-full p-4 border border-blue-300 rounded-md text-blue-800"
            >
              <option value="">Select work environment</option>
              {workEnvironments.map((environment) => (
                <option key={environment} value={environment}>{environment}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-700"
          >
            Unlock Opportunities
          </button>
        </form>
        {tutorialVideo && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Tutorial Video</h2>
            <video className="w-full h-auto" controls>
              <source src={tutorialVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9267925924326749" crossorigin="anonymous"></script>  
    </div>
  );
};

export default UnlockCareerOpportunitiesPage;
