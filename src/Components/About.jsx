import React from "react";

const pageStyle = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "#2c3e50",
};

const mainHeading = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "30px",
  textAlign: "center",
  color: "#1a1a1a",
};

const card = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  padding: "25px 30px",
  marginBottom: "25px",
  lineHeight: 1.6,
};

const sectionHeading = {
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "18px",
  color: "#34495e",
  borderBottom: "3px solid #4a90e2",
  paddingBottom: "6px",
};

const list = {
  paddingLeft: "20px",
};

const listItem = {
  marginBottom: "10px",
  fontSize: "1.05rem",
};

const eduList = {
  listStyleType: "none",
  paddingLeft: 0,
};

const eduItem = {
  backgroundColor: "#f0f5fb",
  padding: "15px 20px",
  marginBottom: "14px",
  borderRadius: "10px",
  borderLeft: "6px solid #4a90e2",
};

const eduTitle = {
  fontWeight: "700",
  fontSize: "1.1rem",
  marginBottom: "6px",
  color: "#2c3e50",
};

const eduDate = {
  fontSize: "0.9rem",
  color: "#7f8c8d",
  fontStyle: "italic",
};

function AboutUs() {
  return (
    <div style={pageStyle}>
      {/* <h1 style={mainHeading}>About Me</h1> */}

      <div style={card}>
        <h1 style={sectionHeading}>About Me</h1>
        <p>
          Hello! I am <strong>Sumod Metre</strong>, a passionate BCA graduate from ADACS College
          Hatkanangale. I love web development and software engineering. My goal is to constantly
          learn, grow, and build innovative projects while collaborating with industry professionals.
        </p>
      </div>

      <div style={card}>
        <h2 style={sectionHeading}>Education</h2>
        <ul style={eduList}>
          <li style={eduItem}>
            <div style={eduTitle}>Bachelor of Computer Applications (BCA)</div>
            <div>ADACS College Hatkanangale</div>
            <div style={eduDate}>July 2022 - May 2025 | CGPA: 8.0/10</div>
          </li>
          <li style={eduItem}>
            <div style={eduTitle}>Class XII</div>
            <div>KLE’s SSMS PU College, Athani</div>
            <div style={eduDate}>June 2021 - March 2022 | 51%</div>
          </li>
          <li style={eduItem}>
            <div style={eduTitle}>Class X</div>
            <div>GKHS High School, Machhe</div>
            <div style={eduDate}>June 2019 - March 2020 | 87%</div>
          </li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={sectionHeading}>Technical Expertise</h2>
        <ul style={list}>
          <li style={listItem}><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React (basic)</li>
          <li style={listItem}><strong>Backend:</strong> PHP, Django (Python), Node.js (basic)</li>
          <li style={listItem}><strong>Databases:</strong> MySQL, MongoDB (basic), NoSQL concepts</li>
          <li style={listItem}><strong>Other Skills:</strong> Git & GitHub, Linux basics, REST APIs, Data Structures & Algorithms basics</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={sectionHeading}>Goals & Aspirations</h2>
        <p>
          I am seeking internship or job opportunities to apply my skills on real-world projects and learn from experienced professionals. 
          In the long run, I aspire to become a proficient full-stack developer and explore integrating AI and ML technologies into web development.
        </p>
      </div>

      <div style={card}>
        <h2 style={sectionHeading}>Hobbies & Interests</h2>
        <ul style={list}>
          <li style={listItem}>🏏 Playing Cricket</li>
          <li style={listItem}>🌐 Browsing the Internet</li>
          <li style={listItem}>👶 Spending Time with Children</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={sectionHeading}>Final Thoughts</h2>
        <p>
          I am excited about opportunities in the tech world and confident that my passion and dedication will allow me to contribute effectively as a software developer.
          Thank you for taking the time to learn about me. Let’s connect and grow together!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
