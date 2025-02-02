import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "./saved.css";

const platformIcons = {
  LinkedIn: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  Indeed: "https://static.indeed.com/favicon.ico",
  Upwork: "https://cdn.worldvectorlogo.com/logos/upwork.svg",
  Fiverr: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
  FlexJobs: "https://www.flexjobs.com/favicon.ico",
  Uncareers: "https://uncareer.net/favicon.ico",
  Microsoft: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  Google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  Amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
};

const predefinedJobs = [
  { title: "Plumber", description: "Expert in pipe and water systems.", platform: "LinkedIn" },
  { title: "Hairdresser", description: "Specialist in hair styling and care.", platform: "Indeed" },
  { title: "Data Analyst", description: "Analyze and interpret data trends.", platform: "Upwork" },
  { title: "Software Engineer", description: "Develop and maintain software systems.", platform: "LinkedIn" },
  { title: "Graphic Designer", description: "Design creative visuals and graphics.", platform: "Fiverr" },
  { title: "Marketing Manager", description: "Plan and execute marketing strategies.", platform: "FlexJobs" },
  { title: "Teacher", description: "Educate and inspire students.", platform: "Uncareers" },
  { title: "Nurse", description: "Provide medical care and assistance.", platform: "LinkedIn" },
  { title: "Electrician", description: "Install and maintain electrical systems.", platform: "Indeed" },
  { title: "Content Writer", description: "Create engaging written content.", platform: "Upwork" },
];

const SavedJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState(predefinedJobs);

  const fetchJobs = async (term) => {
    const jobSources = [
      { name: "LinkedIn", url: `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(term)}` },
      { name: "Indeed", url: `https://www.indeed.com/jobs?q=${encodeURIComponent(term)}` },
      { name: "Upwork", url: `https://www.upwork.com/search/jobs/?q=${encodeURIComponent(term)}` },
      { name: "Fiverr", url: `https://www.fiverr.com/categories/${encodeURIComponent(term)}` },
    ];

    const fetchedJobs = jobSources.map((source) => ({
      title: `${term} at ${source.name}`,
      description: `Explore ${term} jobs on ${source.name}.`,
      platform: source.name,
      url: source.url,
    }));

    setJobs(fetchedJobs);
  };

  const handleSearch = () => {
    const filteredJobs = predefinedJobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredJobs.length === 0 && searchTerm.trim()) {
      fetchJobs(searchTerm);
    } else {
      setJobs(filteredJobs);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
          <nav className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center gap-2 text-2xl text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
                <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
              </svg>
              <span>Job Portal</span>
            </a>
          </nav>
        </header>

        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Find Your Next Dream Job</h1>

        {/* Search Input */}
        <div className="mb-8 flex flex-col items-center space-y-4 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-2/3 lg:w-1/2 p-4 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
            placeholder="Search for jobs (e.g., Software Engineer)"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-800">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.description}</p>

              {/* Platform Icons */}
              <div className="flex space-x-4 mt-4">
                {Object.entries(platformIcons).map(([platform, icon]) => {
                  if (platform === job.platform) {
                    return (
                      <a
                        key={platform}
                        href={job.url || `https://www.${platform.toLowerCase()}.com/jobs/search?keywords=${encodeURIComponent(job.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                          <img
                            src={icon}
                            alt={`${platform} icon`}
                            className="h-12 w-12"
                            title={`View ${job.title} on ${platform}`}
                          />
                        </div>
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Icons */}
        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-marquee-reverse">
              {Object.entries(platformIcons).map(([platform, icon]) => (
                <a
                  key={platform}
                  href={`https://www.${platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <img
                      src={icon}
                      alt={`${platform} icon`}
                      className="h-9 w-22 hover:opacity-75 transition"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel for Job Site Names */}
        <div className="mt-8 relative">
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-marquee">
              {Object.keys(platformIcons).map((platform) => (
                <div key={platform} className="flex-shrink-0 text-xl font-semibold text-blue-800">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
