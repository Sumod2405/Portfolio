import React from "react";

function SocialLinks() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        textAlign: "left",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.015)";
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.15)";
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "20px",
          color: "#1e2a78",
          borderBottom: "2px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        📇 Let's Connect!
      </h2>

      <div style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        <p>
          <strong>📍 Address:</strong><br />
          Shahunagar, Kondigre, Kolhapur
        </p>

        <p>
          <strong>📞 Phone & WhatsApp:</strong><br />
          <a href="tel:+919964429230" style={{ color: "#0066cc", textDecoration: "none" }}>
            +91 99644 29230
          </a>
        </p>

        <p>
          <strong>📧 Email:</strong><br />
          <a href="mailto:metresumod1@gmail.com" style={{ color: "#0066cc", textDecoration: "none" }}>
            metresumod1@gmail.com
          </a>
          <br />
          <a href="mailto:sumodmetre731@gmail.com" style={{ color: "#0066cc", textDecoration: "none" }}>
            sumodmetre731@gmail.com
          </a>
        </p>

        <p>
          <strong>🌐 GitHub:</strong><br />
          <a href="https://github.com/Sumod2405" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", textDecoration: "none" }}>
            github.com/Sumod2405
          </a>
        </p>

        <p>
          <strong>💼 LinkedIn:</strong><br />
          <a href="https://www.linkedin.com/in/sumod-metre-354317216/" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", textDecoration: "none" }}>
            linkedin.com/in/sumod-metre-354317216
          </a>
        </p>

        <p>
          <strong>📸 Instagram:</strong><br />
          <a href="https://instagram.com/sumo_the_metre" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", textDecoration: "none" }}>
            instagram.com/sumo_the_metre
          </a>
        </p>
      </div>
    </div>
  );
}

export default SocialLinks; 