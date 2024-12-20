import React from 'react';

const ResumePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="./resume.html"
        title="Resume Builder"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      ></iframe>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9267925924326749" crossorigin="anonymous"></script>  
    </div>
  );
};

export default ResumePage;
