import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  SignedIn, // Import SignedIn
  SignedOut, // Import SignedOut
  RedirectToSignIn,
  UserButton,
} from '@clerk/clerk-react';

// Import the actual components from your file structure
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

// This component handles the redirection logic.
function PlannerRedirect() {
  useEffect(() => {
    // Redirect to your other app after user is authenticated
    window.location.href = 'https://easy-ride-planner-qwwr.onrender.com/';
  }, []);

  return <p>Redirecting to EasyRidePlanner5-main...</p>;
}

// The main application component, now with an integrated header.
export default function App() {
  return (
    <>
      {/* The following style block contains all the CSS for the application. */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #1a202c;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .header {
          padding: 1rem 2rem;
          background-color: #ffffff;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }

        .left-nav-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .header-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo {
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          background-color: #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.125rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          font-size: 1.125rem;
          font-weight: 500;
          color: #4a5568;
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }

        .nav-link:hover {
          color: #f97316;
        }
        
        .right-auth-section {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .auth-button {
            text-decoration: none;
            color: #1a202c;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            border: 1px solid #e2e8f0;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        
        .auth-button:hover {
            background-color: #f97316;
            color: #ffffff;
            border-color: #f97316;
        }
        `}
      </style>

      {/* The main container for the entire application. */}
      <div className="easy-ride-planner-app">
        {/* Header section with branding and navigation */}
        <header className="header">
          {/* Left section: Logo and navigation links */}
          <div className="left-nav-section">
            <div className="header-brand">
              <div className="logo">
                <span>E</span>
              </div>
              <h1 className="logo-text">Easy Route Planner</h1>
            </div>
            
            <nav>
              <ul className="nav-list">
                <li>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                {/* Conditionally render Planner link based on authentication status */}
                <SignedIn>
                  <li>
                    <Link to="/planner" className="nav-link">Planner</Link>
                  </li>
                </SignedIn>
              </ul>
            </nav>
          </div>
          
          {/* Right section: Clerk authentication buttons */}
          <div className="right-auth-section">
            <SignedIn>
                {/* Renders a UserButton when the user is signed in */}
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
                {/* Renders Sign In and Sign Up links when the user is signed out */}
                <Link to="/sign-in" className="auth-button">Sign In</Link>
                <Link to="/sign-up" className="auth-button">Sign Up</Link>
            </SignedOut>
          </div>
        </header>

        {/* Content area based on the current route */}
        <div style={{ padding: '1rem' }}>
          <Routes>
            {/* The Home route is now explicitly set to "/" */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Sign In with redirect to other app */}
            <Route
              path="/sign-in/*"
              element={
                <SignIn
                  routing="path"
                  path="/sign-in"
                  redirectUrl="http://localhost:5173/"
                />
              }
            />

            {/* Sign Up with redirect to other app */}
            <Route
              path="/sign-up/*"
              element={
                <SignUp
                  routing="path"
                  path="/sign-up"
                  redirectUrl="http://localhost:5173/"
                />
              }
            />

            {/* Planner route redirects logged-in users to other app */}
            <Route
              path="/planner"
              element={
                <>
                  <SignedIn>
                    <PlannerRedirect />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
