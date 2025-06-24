import React from "react";
import "./about.css";
import profilePic from "../Images/profile.png";
import resume from "../Images/Resume.pdf"; // Correctly imported
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <motion.div
            className="col-md-6 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Hello</h1>
            <h2>
              I'm <span className="text-primary">Aravind Krishna</span>
            </h2>
            <p className="lead">
              A <strong>Full Stack Developer</strong> with a passion for building interactive
              and intuitive web applications. I specialize in creating{" "}
              <em>visually stunning</em> and <em>responsive</em> interfaces that
              engage users and deliver results.
            </p>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
            >
              View Resume
            </a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="image-wrapper">
              <img
                src={profilePic}
                alt="Profile"
                className="img-fluid profile-pic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
