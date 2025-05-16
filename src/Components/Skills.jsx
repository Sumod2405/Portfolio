import React from "react";

function Skills() {
  return (
    <>
      <style>{`
        .main-card {
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          padding: 40px;
          margin: 40px auto;
          max-width: 1000px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #2c3e50;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 25px;
          color: #34495e;
          border-bottom: 3px solid #4a90e2;
          padding-bottom: 8px;
        }

        .grid-container {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          margin-bottom: 40px;
        }

        .card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 25px 30px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          cursor: pointer;
        }

        .card h3 {
          margin-bottom: 12px;
          color: #1a1a1a;
          font-weight: 700;
        }

        .card p {
          font-size: 1rem;
          line-height: 1.5;
          color: #555;
        }
      `}</style>

      <div className="main-card">
        <h2>Technical Skills</h2>
        <div className="grid-container">
          <div className="card">
            <h3>Frontend Development</h3>
            <p>Basic knowledge of HTML, CSS, JavaScript, and Bootstrap for creating simple and responsive web pages.</p>
          </div>
          <div className="card">
            <h3>Backend Development</h3>
            <p>Familiar with Django and PHP for handling server-side logic and building web applications.</p>
          </div>
          <div className="card">
            <h3>Database Management</h3>
            <p>Worked with MySQL for storing and retrieving data in projects. Basic understanding of MongoDB.</p>
          </div>
          <div className="card">
            <h3>Frameworks</h3>
            <p>Django</p>
            <p>ReactJs</p>
            <p>Laravel</p>
          </div>
          <div className="card">
            <h3>Deployment</h3>
            <p>Comfortable using GitHub for managing code. Basic experience with deployment platforms like PythonAnywhere.</p>
          </div>
          <div className="card">
            <h3>Programming Languages</h3>
            <p>Good understanding of Python and C++, with a focus on writing clean and logical code.</p>
          </div>
          <div className="card">
            <h3>Problem-Solving Practice</h3>
            <p>Learning and practicing easy to medium level coding questions on platforms like HackerRank.</p>
          </div>
          <div className="card">
            <h3>OOP Concepts</h3>
            <p>Basic knowledge of Object-Oriented Programming (OOP).</p>
          </div>
        </div>

        <h2>Soft Skills</h2>
        <div className="grid-container">
          <div className="card">
            <h3>Problem-Solving Mindset</h3>
            <p>Ability to think logically and find simple solutions to coding challenges.</p>
          </div>
          <div className="card">
            <h3>Teamwork & Collaboration</h3>
            <p>Enjoy working on group projects and learning from team members.</p>
          </div>
          <div className="card">
            <h3>Communication Skills</h3>
            <p>Able to explain ideas clearly and present projects effectively.</p>
          </div>
          <div className="card">
            <h3>Adaptability & Eagerness to Learn</h3>
            <p>Always interested in exploring new technologies and improving coding skills.</p>
          </div>
          <div className="card">
            <h3>Time Management</h3>
            <p>Balances studies, coding practice, and projects efficiently.</p>
          </div>
          <div className="card">
            <h3>Critical Thinking</h3>
            <p>Can break down problems into smaller parts to find effective solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
