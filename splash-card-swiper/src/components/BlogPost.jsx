import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the markdown file
    fetch("/static/media/blog-3-free-training-job-placement.md")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((err) => console.log("Error fetching markdown:", err));
  }, []);

  return (
    <div className="blog-post-container">
      <Helmet>
        <title>How to Access Free Training and Job Placement Near Me</title>
        <meta
          name="description"
          content="Discover how free training programs and job placement services can boost your career. Learn where to find them and how to get started."
        />
        <meta name="keywords" content="free training, job placement, career development, upskilling, career growth" />
        <meta property="og:title" content="How to Access Free Training and Job Placement Near Me" />
        <meta property="og:description" content="Boost your career with free training and job placement programs. Find resources near you to improve your skills and secure a job." />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="http://localhost:3000/blog/blog-3-free-training-job-placement" />
        <meta name="twitter:title" content="How to Access Free Training and Job Placement Near Me" />
        <meta name="twitter:description" content="Boost your career with free training and job placement programs. Find resources near you to improve your skills and secure a job." />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
 
      <h1>Blog Post: How to Access Free Training and Job Placement</h1>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            return !inline ? (
              <SyntaxHighlighter
                style={dracula}
                language="javascript"
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default BlogPost;
