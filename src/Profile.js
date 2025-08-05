import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/rushikesh.png" alt="Rushikesh" className="profile-img" />
        <div className="intro-text">
          <h2>Hello, I'm Rushikesh Kshirsagar</h2>
          <p>
            I'm from <strong>Ahilyanagar</strong>. I completed my <strong>Bachelor’s in Computer Application</strong> from
            <strong> Pune University</strong>. I'm currently pursuing a <strong>Java Full Stack Course</strong> at
            <strong> IT Vedant</strong>, learning <strong>HTML, CSS, JavaScript, and React</strong>.
          </p>
          <p>
            I come from a <strong>simple family</strong>. My <strong>parents are farmers</strong>—my father helped me
            build confidence, and my mother taught me to respect others and have good social behavior.
          </p>
          <a href="\Rushikesh.pdf" download="Rushikesh_Resume.pdf" className="btn">
            📄 Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/rushikesh-kshirsagar-86921a308/?trk=public-profile-join-page"
            target="_blank"
            rel="noopener noreferrer"
            className="btn linkedin"
          >
            🔗 Visit LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
