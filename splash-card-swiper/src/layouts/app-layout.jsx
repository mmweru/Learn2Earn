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
    </div>
  );
}

export default AppLayout;
