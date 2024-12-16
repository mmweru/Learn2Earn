import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'tailwindcss/tailwind.css';
import './index.css'; // Custom CSS for additional styling

// Enhanced Text Animation with Slide and Fade Effects
const AnimatedText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setFade(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500); // Short fade out
    }, 2500); // Switch text every 2.5 seconds

    return () => clearTimeout(timeoutId);
  }, [currentTextIndex, texts.length]);

  return (
    <h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 transform ${
        fade ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'
      }`}
    >
      <span className="text-blue-600">Learn 2 </span>
      <span className="text-blue-900">{texts[currentTextIndex]}</span>
    </h1>
  );
};

const SplashScreen = () => {
  const dynamicTexts = ['Earn', 'Work', 'Grow', 'Succeed'];
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Navigate to the UnlockCareerOpportunitiesPage after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/skill-matching'); // Change to the path of your UnlockCareerOpportunitiesPage
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-200 to-white">
      {/* Main Content Wrapper */}
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 py-6 text-center space-y-12 animate__animated animate__fadeIn animate__slow">
        {/* Header with Animated Text */}
        <div className="space-y-4">
          <AnimatedText texts={dynamicTexts} />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 animate__animated animate__fadeInUp">
            "Your gateway to mastering skills and unlocking job opportunities"
          </p>
        </div>

        {/* Enhanced Lottie Animation */}
        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] mx-auto transform transition-transform duration-700 hover:scale-110 animate__animated animate__zoomIn animate__slow">
          <dotlottie-player
            src="https://lottie.host/a8b262b1-eae3-4e2e-b4e4-d078f7ee1bf9/dAlB7FK6SP.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', height: '100%' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => navigate('/skill-matching')} // Navigate to UnlockCareerOpportunitiesPage
          className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 w-[70%] max-w-md text-sm sm:text-base md:text-lg"
        >
          Get Started
        </button>

        {/* Footer Text */}
        <div className="text-center text-gray-500 animate__animated animate__fadeInUp animate__delay-1s">
          <p className="text-xs sm:text-sm md:text-base px-4">
            We provide you with the tools and resources to enhance your skills and advance your career. Explore our platform and start your journey to success today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
