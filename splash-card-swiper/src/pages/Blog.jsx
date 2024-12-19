import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      title: "How to Access Free Training and Job Placement Near Me",
      slug: "blog-3-free-training-job-placement",
      description: "Learn how to find free training and job placement resources near you.",
      date: "2024-12-19",
    },
  ];

  return (
    <div className="blog-list">
      <h1>Our Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.slug} className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>{blog.date}</p>
          <Link to={`/blog/${blog.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
