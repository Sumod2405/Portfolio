import React from "react";

function Projects() {
  const projects = [
    {
      title: "Canteen Billing System (Full-Stack)",
      description:
        "Designed and implemented a comprehensive billing system for a canteen using HTML, CSS, and JavaScript on the frontend and PHP with MySQL for backend processing. The system supports real-time order processing, automatic bill calculation, and detailed sales tracking. It includes a unique 'Udar' feature for credit management, allowing the canteen to track pending customer payments, and a specialized OT (Overtime) billing module to handle payments for overtime workers. The interface is fully responsive, ensuring smooth operation across devices, and optimized database queries ensure fast and secure transactions. This project enhanced overall canteen financial management efficiency and user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Responsive Design", "SQL Queries"],
      link: "https://github.com/Sumod2405/MyProject",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Developed a fully responsive portfolio website using React.js, incorporating Bootstrap for styling and React Router for seamless navigation between pages. The website showcases my skills, projects, and work experience in a clean, professional layout. Implemented reusable components and dynamic routing to ensure a smooth user experience without page reloads. Deployed on GitHub Pages for public access, this project helped me understand React fundamentals, routing concepts, component lifecycle, and deployment processes.",
      technologies: ["React.js", "Bootstrap", "React Router", "GitHub Pages", "Component Reuse"],
      link: "https://sumod2405.github.io/Portfolio/",
    },
    {
      title: "Movie Search App (React + OMDB API)",
      description:
        "Created an interactive movie search application using React that fetches data from the OMDB API. Users can search for movies by title, view detailed information like ratings, cast, and plot summaries, and browse through results in a clean, intuitive interface. Leveraged React hooks (useState, useEffect) for state management and API calls, and implemented conditional rendering for loading states and error handling. This project deepened my understanding of asynchronous operations in React and API integration.",
      technologies: ["React.js", "OMDB API", "React Hooks", "Conditional Rendering", "API Integration"],
      link: "https://sumod2405.github.io/movie-app/",
    },
    {
      title: "Student Record Management System",
      description:
        "Built a web application using Laravel and MySQL to efficiently manage student data. Features include full CRUD (Create, Read, Update, Delete) operations on student records, secure admin authentication, and image uploads for student profiles. The system follows MVC architecture, ensuring clean code separation and maintainability. This project enhanced my skills in backend development, database design, and working with PHP frameworks.",
      technologies: ["Laravel", "MySQL", "PHP", "MVC Architecture", "Authentication", "Image Upload"],
      link: "",
    },
    {
      title: "Mini Python Projects",
      description:
        "Developed multiple small-scale Python projects to strengthen programming fundamentals:\n\n1. Hotel Bill System: Utilized dictionaries and lists along with Object-Oriented Programming (OOP) to manage menu items and calculate bills accurately.\n2. Mini ATM Simulator: Simulated banking operations such as deposits, withdrawals, and balance checks using loops and conditional statements.\n3. Bank Account Management: Implemented account functionalities using OOP concepts, including inheritance and encapsulation, to handle transactions and user data securely.\n\nThese projects helped me practice logical thinking, OOP design, and basic data structures.",
      technologies: ["Python", "OOP", "Loops", "Conditional Statements", "Dictionaries", "Lists"],
      link: "https://github.com/Sumod2405/Python-",
    },
    {
      title: "Fees Management System for College (Ongoing)",
      description:
        "Currently developing a comprehensive fees management system for a college with 5 departments and 3 classes in each. Built using Django (Python), HTML, CSS, and MySQL. This system will manage fee payments, generate reports, handle multiple departments and classes, and provide secure admin authentication. Focused on modular architecture and responsive design to ensure scalability and ease of use.",
      technologies: ["Django", "Python", "HTML", "CSS", "MySQL", "Admin Authentication", "Modular Architecture"],
      link: "",
    },
  ];

  return (
    <>
      <style>{`
        section {
          max-width: 1200px;
          margin: 50px auto;
          padding: 0 20px;
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
        p.intro {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 40px;
          color: #444;
        }
        .main-card {
          background-color: #fefefe;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 20px;
        }
        .card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 20px 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .card h3 {
          margin-bottom: 10px;
          color: #1a1a1a;
          font-size: 1.3rem;
          border-bottom: 2px solid #4a90e2;
          padding-bottom: 5px;
          display: inline-block;
        }
        .card p {
          white-space: pre-line;
          color: #555;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .card ul {
          padding-left: 20px;
          margin-bottom: 10px;
        }
        .card li {
          list-style-type: disc;
          color: #333;
        }
        .project-link {
          color: #007bff;
          font-weight: bold;
          text-decoration: none;
        }
        .project-link:hover {
          text-decoration: underline;
        }
        .coming-soon {
          font-style: italic;
          color: #999;
        }
      `}</style>

      <section>
        <div className="main-card">
          <h2>Projects</h2>
          <p className="intro">
            Below is a showcase of my key projects, demonstrating my ability to build both frontend and backend applications with real-world functionality. These projects highlight my skills in web development, database management, API integration, and problem-solving through programming. Each project reflects my commitment to writing clean, efficient code and delivering user-friendly experiences.
          </p>
          <div className="grid-container">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>Technologies Used:</strong>
                <ul>
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                ) : (
                  <p className="coming-soon">Link coming soon</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
