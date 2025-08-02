import { Routes, Route } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

import './App.css';
import './index.css';
import { useEffect } from 'react';

function PlannerRedirect() {
  useEffect(() => {
    // Redirect to your other app after user is authenticated
    window.location.href = 'http://localhost:5173/';
  }, []);

  return <p>Redirecting to EasyRidePlanner5-main...</p>;
}

function App() {
  return (
    <>
      <Navbar />

      <div style={{ padding: '1rem' }}>
        <Routes>
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
    </>
  );
}

export default App;
