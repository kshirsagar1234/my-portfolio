import React from "react";
import "./Education.css";

function Education() {
    return (
        <section className="content">
            <div className="container">
                <h2>🎓 My Education</h2>


                <div className="edu-box">
                    <h3>💻 Full Stack Java Development Course</h3>
                    <p><strong>Institute:</strong> IT Vedant</p>
                    <p><strong>Status:</strong> Currently Pursuing</p>
                    <p><strong>Technologies:</strong> HTML, CSS, JavaScript, React, Java, Spring Boot, MySQL</p>
                    <p><strong>Project:</strong>
                        <a href="https://kshirsagar1234.github.io/Airline-reservation-system-/" target="_blank" rel="noopener noreferrer">
                            Airline Reservation System
                        </a>
                    </p>
                </div>

                <div className="edu-box">
                    <h3>📘 Bachelor of Computer Application (BCA)</h3>
                    <p><strong>University:</strong> Pune University</p>
                    <p><strong>Year:</strong>2022-2025</p>
                    <p><strong>Result:</strong> 6.75CGPA</p>
                </div>

                <div className="edu-box">
                    <h3>📗 12th Standard (HSC)</h3>
                    <p><strong>Board:</strong> Maharashtra State Board</p>
                    <p><strong>Year:</strong> 2021-2022</p>
                    <p><strong>Percentage:</strong> 74.83%</p>
                </div>

                <div className="edu-box">
                    <h3>📕 10th Standard (SSC)</h3>
                    <p><strong>Board:</strong> Maharashtra State Board</p>
                    <p><strong>Year:</strong> 2019-2020</p>
                    <p><strong>Percentage:</strong> 74.17%</p>
                </div>
            </div>
        </section>
    );
}

export default Education;