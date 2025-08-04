import React from 'react';
import { createRoot } from 'react-dom/client';

// The main application component
export default function App() {

  return (
    <>
      {/* The following style block contains all the CSS for the application. */}
      <style>
        {`
        /* Import the Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');

        /* CSS Reset for consistent cross-browser styling */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        /* Body and main container styles */
        body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff; /* Equivalent to bg-white */
          color: #1a202c; /* A dark gray color */
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .header {
          padding: 1rem 2rem; /* Equivalent to px-8 py-4 */
          background-color: #ffffff;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Equivalent to shadow-sm */
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0; /* Equivalent to border-b border-gray-200 */
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* Equivalent to space-x-2 */
        }

        .logo {
          width: 2rem;
          height: 2rem;
          border-radius: 9999px; /* Equivalent to rounded-full */
          background-color: #f97316; /* Equivalent to bg-orange-500 */
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 700; /* Equivalent to font-bold */
          font-size: 1.125rem; /* Equivalent to text-lg */
        }

        .logo-text {
          font-size: 1.5rem; /* Equivalent to text-2xl */
          font-weight: 700;
          color: #1a202c;
        }

        .nav {
          display: none; /* Hide navigation on small screens */
        }
        
        /* Show navigation on medium screens and up */
        @media (min-width: 768px) {
          .nav {
            display: block;
          }
        }
        
        .nav-list {
          list-style: none;
          display: flex;
          gap: 1.5rem; /* Equivalent to space-x-6 */
        }

        .nav-link {
          font-size: 1.125rem;
          font-weight: 500;
          color: #4a5568; /* Equivalent to text-gray-600 */
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }

        .nav-link:hover {
          color: #f97316; /* Equivalent to hover:text-orange-500 */
        }

        .main-content {
          max-width: 1280px; /* Equivalent to container mx-auto */
          margin-left: auto;
          margin-right: auto;
          padding: 4rem 1rem; /* Equivalent to py-16 px-4 */
          display: flex;
          flex-direction: column; /* Stacks items vertically on mobile */
          align-items: center;
          gap: 3rem; /* Equivalent to space-y-12 */
        }
        
        /* Change main content to a row layout on large screens */
        @media (min-width: 1024px) {
          .main-content {
            flex-direction: row; /* Equivalent to lg:flex-row */
            align-items: flex-start; /* Equivalent to lg:items-start */
            justify-content: space-between;
            gap: 3rem; /* Equivalent to lg:space-x-12 */
          }
        }

        .text-column {
          width: 100%;
          text-align: center; /* Equivalent to text-center */
        }

        @media (min-width: 1024px) {
          .text-column {
            width: 50%; /* Equivalent to lg:w-1/2 */
            text-align: left; /* Equivalent to lg:text-left */
          }
        }

        .main-heading {
          font-size: 3rem; /* Equivalent to text-5xl */
          font-weight: 900; /* Equivalent to font-black */
          line-height: 1.25; /* Equivalent to leading-tight */
          margin-bottom: 1.5rem; /* Equivalent to mb-6 */
        }

        @media (min-width: 768px) {
          .main-heading {
            font-size: 3.75rem; /* Equivalent to md:text-6xl */
          }
        }

        .main-paragraph {
          font-size: 1.125rem; /* Equivalent to text-lg */
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 2rem; /* Equivalent to mb-8 */
          max-width: 36rem; /* Equivalent to max-w-lg */
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 768px) {
          .main-paragraph {
            font-size: 1.25rem; /* Equivalent to md:text-xl */
          }
        }
        
        @media (min-width: 1024px) {
          .main-paragraph {
            margin-left: 0; /* Equivalent to lg:mx-0 */
            margin-right: 0; /* Equivalent to lg:mx-0 */
          }
        }

        .learn-more-button {
          background-color: #f97316;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.125rem;
          padding: 0.75rem 2rem; /* Equivalent to py-3 px-8 */
          border-radius: 9999px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-lg */
          transition: all 0.2s ease-in-out;
          border: none;
          cursor: pointer;
        }
        
        .learn-more-button:hover {
          background-color: #ea580c; /* Equivalent to hover:bg-orange-600 */
          transform: scale(1.05); /* Equivalent to hover:scale-105 */
        }
        
        .learn-more-button:active {
          transform: scale(0.95); /* Equivalent to active:scale-95 */
        }
        
        .learn-more-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.5); /* Equivalent to focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 */
        }

        .image-column {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        @media (min-width: 1024px) {
          .image-column {
            width: 50%; /* Equivalent to lg:w-1/2 */
            justify-content: flex-end; /* Equivalent to lg:justify-end */
          }
        }

        .illustration-image {
          width: 100%;
          max-width: 48rem; /* Equivalent to max-w-xl */
          height: auto;
          border-radius: 0.75rem; /* Equivalent to rounded-xl */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Equivalent to shadow-2xl */
        }
        `}
      </style>

      {/* Main container for the entire application. */}
      <div className="easy-ride-planner-app">
        {/* Header section with branding and navigation */}
        
        {/* Main content section with a two-column layout */}
        <main className="main-content">
          {/* Left column for text content */}
          <div className="text-column">
            <h2 className="main-heading">
              PLAN YOUR TRIP
            </h2>
         <p className="main-paragraph">
  <ul>
    <li>Effortlessly map out your journeys with Easy Ride Planner.</li>
    <li>From daily commutes to epic road trips, optimize your routes.</li>
    <li>Discover points of interest along your way.</li>
    <li>Save time and fuel for a more efficient travel.</li>
    <li>Get ready for a smoother, smarter travel experience!</li>
  </ul>
</p>
            
          </div>

          {/* Right column for the illustration */}
          <div className="image-column">
            {/* A new, illustrative image is used here to match the desired layout. */}
            <img
              src="https://www.myrouteonline.com/wp-content/uploads/2022/10/Free-Route-Planner-Unlimited-Stops.png"
              alt="An illustration of people planning a trip with a map and an airplane"
              className="illustration-image"
            />
          </div>
        </main>
      </div>
    </>
  );
}

// Mount the App component to the DOM
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
