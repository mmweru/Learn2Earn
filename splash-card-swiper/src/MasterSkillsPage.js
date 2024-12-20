import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { platformLogos } from './assets/platformLogos';  // Import platform logos

const YOUTUBE_API_KEY = 'AIzaSyBgoFf2AfSzDFxJR363-4ghGeV0rf6-dwI';

// Fetch YouTube videos based on a search term
const fetchYouTubeVideos = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${searchTerm}&key=${YOUTUBE_API_KEY}`
    );
    return response.data.items.filter(video => !video.snippet.title.toLowerCase().includes('steal') && !video.snippet.description.toLowerCase().includes('steal'));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};

// Generate the platform URL based on the selected platform and career
const generatePlatformUrl = (platform, career) => {
  switch (platform) {
    case 'Coursera':
      return `https://www.coursera.org/search?query=${encodeURIComponent(career)}`;
    case 'Udemy':
      return `https://www.udemy.com/courses/search/?q=${encodeURIComponent(career)}`;
    case 'LinkedIn':
      return `https://www.linkedin.com/learning/search?keywords=${encodeURIComponent(career)}`;
    case 'KhanAcademy':
      return `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(career)}`;
    default:
      return '';
  }
};

const MasterSkillsPage = () => {
  const location = useLocation();
  const { topCareers, additionalQuestions } = location.state || { topCareers: [], additionalQuestions: [] };
  const [selectedCareer, setSelectedCareer] = useState(topCareers[0] || '');
  const [enteredCareer, setEnteredCareer] = useState('');
  const [videoResults, setVideoResults] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  useEffect(() => {
    if (selectedCareer) {
      // Fetch YouTube videos for the selected career
      fetchYouTubeVideos(selectedCareer).then(videos => setVideoResults(videos));
    }
  }, [selectedCareer]);

  const handlePlatformClick = (platform) => {
    const platformUrl = generatePlatformUrl(platform, selectedCareer);
    if (platformUrl) {
      window.open(platformUrl, '_blank');
    }
  };

  const handleCareerSubmit = () => {
    if (enteredCareer) {
      setSelectedCareer(enteredCareer);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div class="ad-container">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-9267925924326749"
       data-ad-slot="1234567890"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

        <h1 className="text-4xl font-bold text-blue-800 mb-8">Your Top 3 Career Skills to Land You a Job in 2024/2025</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Top Career Opportunities</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {topCareers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Additional Questions</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {additionalQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Tutorials and Resources</h2>
          
          {/* Input for entering a selected career */}
          <div className="mb-4">
            <label htmlFor="career-input" className="block text-gray-700 font-bold mb-2">Enter a Career:</label>
            <input
              type="text"
              id="career-input"
              value={enteredCareer}
              onChange={(e) => setEnteredCareer(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              placeholder="Enter your desired career (e.g., Data Scientist)"
            />
            <button
              onClick={handleCareerSubmit}
              className="mt-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>

          {/* Dropdown for selecting a career */}
          <div className="mb-4">
            <label htmlFor="career-select" className="block text-gray-700 font-bold mb-2">Select a Career:</label>
            <select
              id="career-select"
              value={selectedCareer}
              onChange={(e) => setSelectedCareer(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
            >
              {topCareers.map((career, index) => (
                <option key={index} value={career}>{career}</option>
              ))}
            </select>
          </div>

          {/* Display YouTube videos */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">YouTube Videos:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoResults.map((video) => (
                <div key={video.id.videoId} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold mb-2 text-blue-800">{video.snippet.title}</h4>
                      <p className="text-gray-600">{video.snippet.description.substring(0, 100)}...</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Explore More Platforms */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Explore More Platforms:</h3>
            <div className="flex flex-wrap gap-6">
              {Object.keys(platformLogos).map((platform, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePlatformClick(platform)}
                    className="flex items-center space-x-2 bg-blue-50 p-2 rounded-md hover:bg-blue-100 transition"
                  >
                    <img
                      src={platformLogos[platform]}
                      alt={`${platform} logo`}
                      className="w-16 h-16 object-cover"
                    />
                    <span className="text-lg font-semibold text-blue-600">{platform}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterSkillsPage;
