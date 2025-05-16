import React from "react";

const projects = [
  {
    title: "Canteen Billing System (Full-Stack)",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Responsive Design", "SQL Queries"],
    link: "https://github.com/Sumod2405/MyProject",
  },
  {
    title: "Personal Portfolio Website",
    technologies: ["React.js", "Bootstrap", "React Router", "GitHub Pages", "Component Reuse"],
    link: "https://sumod2405.github.io/Portfolio/",
  },
  {
    title: "Movie Search App (React + OMDB API)",
    technologies: ["React.js", "OMDB API", "React Hooks", "Conditional Rendering", "API Integration"],
    link: "https://sumod2405.github.io/movie-app/",
  },
  {
    title: "Student Record Management System",
    technologies: ["Laravel", "MySQL", "PHP", "MVC Architecture", "Authentication", "Image Upload"],
    link: "",
  },
  {
    title: "Mini Python Projects",
    technologies: ["Python", "OOP", "Loops", "Conditional Statements", "Dictionaries", "Lists"],
    link: "https://github.com/Sumod2405/Python-",
  },
  {
    title: "Fees Management System for College (Ongoing)",
    technologies: ["Django", "Python", "HTML", "CSS", "MySQL", "Admin Authentication", "Modular Architecture"],
    link: "",
  },
];

export default function Resume() {
  return (
    <>
      <style>{`
        .resume-wrapper {
          max-width: 1100px;
          margin: 40px auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #2c3e50;
          padding: 20px;
          background-color: #f4f6f8;
          border-radius: 25px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .card {
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          padding: 35px;
          margin: 20px 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #34495e;
          border-bottom: 3px solid #4a90e2;
          padding-bottom: 6px;
          font-weight: bold;
        }

        h3 {
          margin-bottom: 10px;
        }

        ul {
          padding-left: 20px;
        }

        .project-title {
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 6px;
          color: #2c3e50;
        }

        .project-tech {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 6px;
        }

        .download-button {
          display: inline-block;
          margin-bottom: 30px;
          padding: 10px 20px;
          background-color: #4a90e2;
          color: white;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.3s ease;
          cursor: pointer;
        }
        .download-button:hover {
          background-color: #357ABD;
        }
      `}</style>

      <div className="resume-wrapper">



        {/* Contact Section */}
        <div className="card">
          <h2>Sumod Metre</h2>
          <p>📞 +91 99644 29230  </p> <p> 📧 metresumod1@gmail.com</p>
          <p>📍 Kondigre, Maharashtra</p>
        </div>

        {/* Objective */}
        <div className="card">
          <h2>Objective</h2>
          <p>
            Seeking an internship/job opportunity in software development as a fresher, where I can apply my technical skills in web technologies, database management, and problem-solving. Eager to learn and work with modern frameworks like Django, enhance my full-stack development expertise, and contribute to innovative projects while gaining hands-on industry experience.
          </p>
        </div>

        {/* Skills */}
        <div className="card">
          <h2>Skills</h2>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
            <li><strong>Backend:</strong> PHP , Nodejs (Basics)</li>
            <li><strong>Frameworks:</strong> Django (basic), Laravel, React JS</li>
            <li><strong>Database:</strong> MySQL , Mongodb</li>
            <li><strong>Programming:</strong> Python, C++</li>
            <li><strong>Behavioral Skills:</strong> Problem-solving, teamwork, leadership, time management, adaptability, multitasking, critical thinking, communication</li>
          </ul>
        </div>

        {/* Education */}
        <div className="card">
          <h2>Education</h2>
          <div className="education-item">
            <h3>BCA – ADACS College Hatkanangale</h3>
            <p>July 2022 - May 2025 | CGPA: 8.0/10</p>
            <h3>Class XII – KLE’s SSMS PU COLLEGE, Athani</h3>
            <p>June 2021 - March 2022 | 51%</p>
            <h3>Class X – GKHS High School, Machhe</h3>
            <p>June 2019 - March 2020 | 87%</p>
          </div>
        </div>

        {/* Projects */}
        <div className="card">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project">
              <div className="project-title">{project.title}</div>
              <div className="project-tech">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </div>
              {project.link && (
                <p>
                  🔗 <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="card">
          <h2>Certifications</h2>
          <ul>
            <li><strong>GCC TBC Typing Certification (2024):</strong> 30 WPM and 40 WPM</li>
            <li><strong>WEPP Certification (2025):</strong> Web Programming with Python and Django (Ongoing)</li>
          </ul>
        </div>

        {/* Hobbies & Interests */}
        <div className="card">
          <h2>Hobbies & Interests</h2>
          <ul>
            <li>🏏 Playing Cricket</li>
            <li>🌐 Browsing the Internet</li>
            <li>👶 Spending Time with Children</li>
          </ul>
        </div>

        {/* Awards & Recognition */}
        <div className="card">
          <h2>Awards & Recognition</h2>
          <ul>
            <li>🏆 Best Social Worker (High School)</li>
            <li>🎖️ Adarsh Vidyarthi (Primary School)</li>
          </ul>
        </div>

                {/* Download Resume Button */}
        <a href="" className="download-button" download>
          📥 Download Resume
        </a>
      </div>
    </>
  );
}
