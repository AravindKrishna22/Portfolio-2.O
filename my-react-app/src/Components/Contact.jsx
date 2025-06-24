import React from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const NAME = "Aravind Krishna";
const PHONE = "+91 9840698896";
const EMAIL = "aravindkrish658@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/aravind-krishna-294742257/";
const GITHUB = "https://github.com/yourusername";

export default function Contact() {
  return (
    <section className="contact-section" id="Contact">
      <h1 className="contact-heading">
        Contact <span className="highlight">Me</span>
      </h1>

      <div className="contact-card">
        <h2 className="contact-name">{NAME}</h2>
        <ul className="contact-list">
          <li>
            <FaPhoneAlt className="icon" />
            <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a>
          </li>
          <li>
            <FaEnvelope className="icon" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <FaLinkedin className="icon" />
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <FaGithub className="icon" />
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub Portfolio
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
