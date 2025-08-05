// Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <section className="project-section">
        <div className="container">
          <h2>📁 My Projects</h2>

          <div className="project-card">
            <h3>
              <a
                className="project-link"
                href="https://github.com/Rushikesh123/airline-reservation-system"
                target="_blank"
                rel="noopener noreferrer"
              >
               Smart Grocery Store
              </a>
            </h3>
            <p>
             An intuitive web application that simplifies grocery shopping with real-time product browsing, smart cart functionality, and secure checkout.
Users can easily manage their orders, while admins can monitor inventory and update product listings.
Built with a responsive design, it ensures a smooth experience across all devices.


            </p>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">MySQL</span>
          </div>
           <div className="project-card">
            <h3>
              <a
                className="project-link"
                href="https"
                target="_blank"
                rel="noopener noreferrer"
              >
                Airline Reservation System
              </a>
            </h3>
            <p>
             A user-friendly web application for booking and managing flight reservations with real-time seat availability and secure payment integration.
Passengers can search flights, choose seats, and view booking history, while admins can manage flights, schedules, and user data.
The system ensures a smooth and efficient experience with responsive design and streamlined workflows.
            </p>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">MySQL</span>
            <span className="tag">JDBC</span>
          </div>
        </div>
      
      </section>

      <footer>
        &copy; 2025 Rushikesh Kshirsagar. All rights reserved.
      </footer>
    </>
  );
}

export default Projects;
