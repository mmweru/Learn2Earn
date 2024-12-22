import React from 'react';
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import './AppLayout.css'; // Ensure you have this CSS file to include custom styles
import Navigation from '../components/Navigation';

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container text-white bg-opacity-90">
        <Navigation/>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 text-white mt-10">
        Made with ❤️ MagicCoder <br></br>
        <a href="https://www.learn2earn.study/privacy-policy.html" target="_blank">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default AppLayout;
