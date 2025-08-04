// src/pages/Contact.tsx
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Feedback Submitted:', { name, email, thoughts });

    setFeedbackMessage('Your feedback is successfully shared! Thank you.');
    setName('');
    setEmail(''); // Corrected typo: SetEmail to setEmail
    setThoughts('');

    setTimeout(() => {
      setFeedbackMessage('');
    }, 5000);
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');

        /* Basic Reset - important to keep for component-level styling */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Remove body specific styles from here. They should be in App.css or index.css */
        /* body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #1a1a1a;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        } */

        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90%;
          max-width: 1200px;
          padding: 2rem;
          background-color: #ffffff; /* Match background */
          /* Remove min-height/height that would stretch it to full viewport */
        }

        @media (min-width: 768px) {
          .contact-container {
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
          }
        }

        .form-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1rem;
          width: 100%;
          max-width: 400px;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #4a4a4a;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #f0f0f0;
          border: 1px solid #cccccc;
          border-radius: 4px;
          color: #1a1a1a;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s ease-in-out;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #f97316;
        }

        .form-group textarea {
          min-height: 100px;
          resize: vertical;
        }

        .submit-button {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          width: 100%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .submit-button:hover {
          background-color: #333333;
        }

        .submit-button:active {
          background-color: #000000;
        }

        .feedback-message {
          margin-top: 1rem;
          padding: 0.8rem;
          background-color: #28a745;
          color: white;
          border-radius: 4px;
          text-align: center;
          font-size: 0.95rem;
          opacity: 0;
          animation: fadeInOut 5s forwards;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .contact-info-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          text-align: center;
          margin-top: 2rem;
        }

        @media (min-width: 768px) {
          .contact-info-section {
            align-items: flex-start;
            margin-top: 0;
            text-align: left;
          }
        }

        .contact-heading {
          font-size: 4rem;
          font-weight: 900;
          color: #1a1a1a;
          position: relative;
          display: inline-block;
          line-height: 1;
          text-shadow: 2px 2px #f97316;
          letter-spacing: -2px;
        }

        .contact-heading::before {
          content: 'Contact';
          position: absolute;
          top: 0;
          left: 0;
          color: #00f0ff;
          z-index: -1;
          animation: glitch-left 1s infinite alternate-reverse;
        }

        .contact-heading::after {
          content: 'Contact';
          position: absolute;
          top: 0;
          left: 0;
          color: #ff00ff;
          z-index: -2;
          animation: glitch-right 1s infinite alternate-reverse;
        }

        @keyframes glitch-left {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-5px, 0); }
          50% { transform: translate(0, 5px); }
          75% { transform: translate(-5px, 0); }
          100% { transform: translate(0, 0); }
        }

        @keyframes glitch-right {
          0% { transform: translate(0, 0); }
          25% { transform: translate(5px, 0); }
          50% { transform: translate(0, -5px); }
          75% { transform: translate(5px, 0); }
          100% { transform: translate(0, 0); }
        }

        .us-text {
            font-size: 3rem;
            font-weight: 900;
            color: #1a1a1a;
            position: relative;
            display: inline-block;
            line-height: 1;
            text-shadow: -2px -2px #00f0ff;
            margin-left: 0.5rem;
        }
        .contact-line {
            width: 80px;
            height: 4px;
            background-color: #1a1a1a;
            margin: 0.5rem 0 1rem 0;
        }

        .contact-description {
          font-size: 0.9rem;
          color: #4a4a4a;
          max-width: 300px;
          line-height: 1.6;
          margin-top: 2rem;
        }
        `}
      </style>
      <div className="contact-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Corrected typo here as well
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="thoughts">Share your thoughts</label>
              <textarea
                id="thoughts"
                name="thoughts"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              SHARE YOUR FEEDBACK
            </button>
          </form>
          {feedbackMessage && (
            <div className="feedback-message">
              {feedbackMessage}
            </div>
          )}
        </div>

        <div className="contact-info-section">
          <div>
             <h1 className="contact-heading">Contact Us</h1>
             
             
          </div>
          <p className="contact-description">
            It is very important for us to keep in touch with you so we are always
            ready to answer any question that interests you. Shoot!
          </p>
        </div>
      </div>
    </>
  );
}