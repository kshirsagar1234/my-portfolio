import React from "react";
import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "💻✨ Complete Web Development Certification 🚀",
      description: `This comprehensive certification program covers the entire stack of modern web development 🧑‍💻. It equips learners with the skills needed to design 🎨, develop ⚙️, and deploy 🌐 dynamic, responsive, and fully functional websites and web applications from scratch 🛠️.

🧾 HTML5 – Semantic Structure & Clean Markup  
🎨 CSS3 – Flexbox, Grid, Responsive Design & Animations`,
      issuer: "Itvedant Institute",
      date: "May 2025",
      file: "/certificates/web development.pdf",
    },
    {
  title: "⚡ Advanced JavaScript Certification 📜",
  description: `Mastered core and advanced JavaScript concepts including ES6+, async/await, functions, DOM manipulation, and API integration 🔥🧠.`,
  issuer: "Itvedant Institute",
  date: "Jun 2025",
  file: "/certificates/javascript.pdf", // ✅ fixed path
}
  ];
  return (
    <>
      <section className="cert-section">
        <div className="container">
          <h2>📜 My Certifications</h2>

          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3>{cert.title}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{cert.description}</p>
              <p><strong>Issued By:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        &copy; 2025 Rushikesh Kshirsagar. All rights reserved.
      </footer>
    </>
  );
}

export default Certifications;
