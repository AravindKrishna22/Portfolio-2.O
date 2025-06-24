import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skill.css"; // retain if you have custom styles

const skills = [
  { name: "JavaScript", percentage: 78 },
  { name: "React", percentage: 77 },
  { name: "Node.js", percentage: 78 },
  { name: "MongoDB", percentage: 80 },
  { name: "UI/UX Design", percentage: 90 },
  { name: "Figma", percentage: 90 },
  { name: "SQL", percentage: 90 },
];

const Skill = () => {
  return (
    <section className="container py-5" id="skills">
      <h2 className="text-center mb-5">
        My <span className="text-primary">Professional Skills</span>
      </h2>
      <div className="row">
        {skills.map(({ name, percentage }) => (
          <div className="col-md-6 mb-4" key={name}>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">{name}</span>
              <span className="text">{percentage}%</span>
            </div>
            <div className="progress" style={{ height: "8px" }}>
              <motion.div
                className="progress-bar bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
