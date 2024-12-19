import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Learn2Earn</h1>
      <Link to="/blog">Check Out Our Blog</Link>
    </div>
  );
};

export default Home;
