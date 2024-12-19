import React from "react";
import BlogPost from "../components/BlogPost";
import SEO from "../components/SEO";
import fs from "fs";
import path from "path";

const BlogPostPage = ({ postContent, postMeta }) => {
  return (
    <div>
      <SEO
        title={postMeta.title}
        description="Discover the best free training and job placement resources near you."
        keywords="free training, job placement, career growth"
      />
      <BlogPost content={postContent} />
    </div>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  const filePath = path.join(process.cwd(), `src/posts/${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");

  const meta = {
    title: "How to Access Free Training and Job Placement Near Me",
    date: "2024-12-19",
  };

  return {
    props: {
      postContent: content,
      postMeta: meta,
    },
  };
}

export default BlogPostPage;
