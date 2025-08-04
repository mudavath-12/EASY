import React from 'react';
import './about.css'; // This import is correct for the given file structure
import { createRoot } from 'react-dom/client';

export default function App() {
  return (
    // Changed from "bg-white font-sans text-gray-800" to the custom class
    <div className="app-container">
      <About />
    </div>
  );
}

const About = () => {
  return (
    <>
      {/* About Section - Image on Left, Text on Right */}
      {/* Replaced Tailwind classes with custom CSS class "section-about" */}
      <section className="section-about">
        {/* Replaced Tailwind classes with custom CSS classes "container image-left" */}
        <div className="container image-left">
          {/* Replaced Tailwind classes with custom CSS class "image-container" */}
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/691423398/vector/winding-road-on-a-white-isolated-background-with-pin-pointers.jpg?s=612x612&w=0&k=20&c=PaRJPzxTEMgSc09prPpitCxGPMUcqMtwPSV4FxNfrGw="
              alt="The Easy Ride Planner team"
              // Replaced Tailwind classes with custom CSS classes "feature-image border-sky"
              className="feature-image border-sky"
            />
          </div>
          {/* Replaced Tailwind classes with custom CSS class "text-container" */}
          <div className="text-container">
            {/* Replaced Tailwind classes with custom CSS class "section-heading" */}
            <h2 className="section-heading">
              About {/* Replaced Tailwind class with custom CSS class "heading-sky-highlight" */}
              <span className="heading-sky-highlight">Easy Route Planner</span>
            </h2>
            {/* Replaced Tailwind classes with custom CSS class "section-paragraph" */}
            <p className="section-paragraph">
              <strong>Easy Route Planner</strong> is your intelligent travel companion, designed to simplify trip planning, scheduling, and real-time tracking. Whether you're commuting, managing a fleet, or planning a getaway, our platform offers reliable, efficient, and intuitive tools to support every journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Image on Right, Text on Left */}
      {/* Replaced Tailwind classes with custom CSS class "section-about" */}
      <section className="section-about">
        {/* Replaced Tailwind classes with custom CSS classes "container image-right" */}
        <div className="container image-right">
          {/* Replaced Tailwind classes with custom CSS class "image-container" */}
          <div className="image-container">
            <img
              src="https://play-lh.googleusercontent.com/0mJlLkvGLYKezD33paH2OJ1c3m1M-YtpkO66t02ZFR6m7f_fOXSJ7oNJZGseDYpfRBE"
              alt="An illustration of smart fleet management"
              // Replaced Tailwind classes with custom CSS classes "feature-image border-amber"
              className="feature-image border-amber"
            />
          </div>
          {/* Replaced Tailwind classes with custom CSS class "text-container" */}
          <div className="text-container">
            {/* Replaced Tailwind classes with custom CSS class "section-heading" */}
            <h2 className="section-heading">
              Our {/* Replaced Tailwind class with custom CSS class "heading-amber-highlight" */}
              <span className="heading-amber-highlight">Mission</span>
            </h2>
            {/* Replaced Tailwind classes with custom CSS class "section-paragraph" */}
            <p className="section-paragraph">
              We believe every journey should be seamless and stress-free. Our mission is to empower individuals and businesses with cutting-edge routing algorithms and real-time traffic data, enabling them to make smarter travel decisions and optimize their daily commutes and logistical operations.
            </p>
          </div>
        </div>
      </section>

      {/* The "Our Story" section has been removed below as per your request */}
      {/*
      <section className="section-about">
        <div className="container image-left">
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbgecLwbMYTnP1T8lJamVhiDtZAOA99x_-Q&s"
              alt="A stylized map showing different routes"
              className="feature-image border-sky"
            />
          </div>
          <div className="text-container">
            <h2 className="section-heading">
              Our <span className="heading-sky-highlight">Story</span>
            </h2>
            <p className="section-paragraph">
              Easy Ride Planner was founded on the idea of simplifying travel in a world of increasing complexity. What started as a small project to help commuters find the fastest routes has grown into a powerful platform that serves thousands of users. We continually evolve our technology, driven by a passion for creating efficient and intelligent solutions for modern transportation challenges. Our journey is a testament to our commitment to a smoother, smarter travel experience for everyone.
            </p>
          </div>
        </div>
      </section>
      */}
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
