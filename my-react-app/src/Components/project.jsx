import React, { useState, useEffect } from "react";
import "./Project.css";

import video1 from "../Images/UI1.mp4";
import video2 from "../Images/Acc.mp4";

import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import img4 from "../Images/4.png";
import img5 from "../Images/5.png";
import img6 from "../Images/6.png";
import img7 from "../Images/7.png";
import img8 from "../Images/8.png";
import img9 from "../Images/9.png";
import img10 from "../Images/10.png";

const slideshowImages = [
  { src: img1, alt: "Initial design concept" },
  { src: img2, alt: "User interface mockup" },
  { src: img3, alt: "Color scheme exploration" },
  { src: img4, alt: "Mobile responsive view" },
  { src: img5, alt: "Dashboard overview" },
  { src: img6, alt: "Navigation structure" },
  { src: img7, alt: "Data visualization" },
  { src: img8, alt: "User profile section" },
  { src: img9, alt: "Settings panel" },
  { src: img10, alt: "Final product showcase" },
];

/* ---------- reusable slide components ---------- */

const VideoProject = ({ videoSrc, title, tech, description }) => (
  <div className="slide">
    <video
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      className="media"
    />
    <Caption title={title} tech={tech} description={description} />
  </div>
);

const SlideshowProject = ({ images, title, tech, description }) => {
  const [current, setCurrent] = useState(0);

  // internal slideshow continues to auto‑cycle
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      2500
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (

    <div className="slide" id="Project">
      <h1 className="text-center mb-5">
        My <span className="text-primary">Projects</span>
      </h1>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="media"
      />
      <Caption title={title} tech={tech} description={description} />
    </div>
  );
};

const Caption = ({ title, tech, description }) => (
  <div className="caption">
    <h3>{title}</h3>
    <div className="tags">
      {tech.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
    <p>{description}</p>
  </div>
);

/* ---------- main carousel (manual only) ---------- */

const projects = [
     {
    component: (
      <SlideshowProject
        images={slideshowImages}
        title="Project Management System"
        tech={["React", "SQL", "Express", "Node.js"]}
        description="An all-in-one platform to manage, monitor, and optimize projects with real-time
insights into resources, labour, and cost."
      />
    ),
  },
  {
    component: (
      <VideoProject
        videoSrc={video1}
        title="UI Design Mercedies redesign"
        tech={["FIGMA","UI/UX"]}
        description="A modern and intuitive redesign of the official Mercedes-Benz website, focused on elevating user experience through minimalism, clarity, and luxury-inspired aesthetics. This project reimagines the digital presence of the brand by combining sleek visual design with intuitive navigation and responsiveness across devices."
      />
    ),
  },
  {
    component: (
      <VideoProject
        videoSrc={video2}
        title="Accident Detection System"
        tech={["Yolov8", "Python", "OpenCV"]}
        description="Accident detection and alert systemm using Yolov8n."
      />
    ),
  },
];

export default function PortfolioProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const nextSlide = () =>
    setActiveIndex((i) => (i + 1) % projects.length);

  return (
    <div className="portfolio-carousel">
      {projects[activeIndex].component}

      {/* manual nav */}
      <div className="nav-buttons">
        <button onClick={prevSlide}>‹</button>
        <button onClick={nextSlide}>›</button>
      </div>

      {/* dots */}
      <div className="dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
