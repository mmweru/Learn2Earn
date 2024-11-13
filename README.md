# 📚 Learn2Earn - Empowering Your Future Through Skills!

Welcome to **Learn2Earn**! A one-stop platform designed to bridge the gap between learners and employment opportunities. Whether you're looking to upskill, find a job, or simply explore resources, Learn2Earn has you covered.

## 🌟 Project Overview

Learn2Earn is built with **React (JSX)** on the client side and **MongoDB** on the backend. The platform is categorized into two main parts:
- **job-portal-server** (Server Side) - Manages data, jobs, users, and authentication.
- **splash-card-swiper** (Client Side) - User-facing interface, featuring interactive skill-matching, training modules, and much more!

---

## 🚀 Features

1. **Skill Matching** - Find roles tailored to your strengths and passions.
2. **Skill Training** - Access courses, training programs, and interactive materials to improve your skills.
3. **Job Board** - Employers can post job openings, and job-seekers can apply directly through the platform.
4. **Upskilling Resources** - Browse a library of books, articles, and courses to keep learning and growing.
5. **Resume Builder** - Easily create and download your professional resume in one place.

---

## 🎉 Getting Started

Follow these steps to set up and run Learn2Earn locally:

### Prerequisites
- **Node.js** - Ensure you have Node.js installed on your system.
- **MongoDB** - Set up MongoDB locally or use a MongoDB cloud service.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/learn2earn.git
   cd learn2earn
2. **Install Dependencies for the Client and Server**
   ```bash
   cd splash-card-swiper  # Move to client directory
    npm install             # Install client-side dependencies
    
    cd ../job-portal-server # Move to server directory
    npm install             # Install server-side dependencies
3. **Configure Environment Variables**

Create a .env file in the job-portal-server directory and add your MongoDB connection string:
  MONGODB_URI=your_mongodb_connection_string
  
4. **Run the Development Servers**
   ```bash
    # Start the server
    cd job-portal-server
    npm start
    
    # Start the client
    cd ../splash-card-swiper
    npm start
**📂 Project Structure**
job-portal-server (Server)
Database: MongoDB
Authentication: User authentication and authorization
API: RESTful API for managing users, jobs, skills, and resume data.
splash-card-swiper (Client)
Framework: React
UI: Interactive user interface with skill cards, job listings, and resume builder.
State Management: Using React state hooks and context API for seamless user experience.

**🤝 Contributing**
We're excited to have you contribute! Here's how you can help:

- Fork the Repository - Click the "Fork" button at the top of this page.
- Clone Your Fork - Use git clone to bring the code to your local machine.
- Create a Branch - Name your branch by feature (e.g., feature/new-skill-matching).
- Commit Your Changes - Use clear and concise commit messages.
- Push to Your Fork - Push your changes to GitHub.
- Submit a Pull Request - Submit your PR for review!
- Contribution Guidelines
- Ensure all code is well-documented.
- Write tests for new functionality where possible.
- Follow the project’s coding style and conventions.
- Be respectful and constructive in code reviews and discussions.

**🛠️ Technologies Used**
- Client: React (JSX)
- Server: Node.js with Express
- Database: MongoDB
- Styling: Tailwind CSS








  
