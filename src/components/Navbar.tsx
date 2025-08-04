import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/clerk-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const { user } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const firstLetter =
    user?.fullName?.charAt(0).toUpperCase() ||
    user?.username?.charAt(0).toUpperCase() ||
    "U";

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
        color: "black",
      }}
    >
      {/* Left: Navigation Links */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "black", textDecoration: "none" }}>
          Contact
        </Link>
      </div>

      {/* Right: Auth Controls */}
      <div style={{ position: "relative" }}>
        <SignedOut>
          <Link
            to="/sign-in"
            style={{ marginRight: "1rem", color: "black", textDecoration: "none" }}
          >
            Sign In
          </Link>
          <Link to="/sign-up" style={{ color: "black", textDecoration: "none" }}>
            Sign Up
          </Link>
        </SignedOut>

        <SignedIn>
          <Link
            to="/planner"
            style={{ marginRight: "1rem", color: "black", textDecoration: "none" }}
          >
            Planner
          </Link>

          <div
            ref={dropdownRef}
            style={{
              display: "inline-block",
              position: "relative",
              cursor: "pointer",
            }}
          >
            {/* Avatar Circle */}
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#007bff",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                userSelect: "none",
              }}
            >
              {firstLetter}
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: 0,
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  minWidth: "200px",
                  zIndex: 100,
                  color: "black",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #eee",
                    fontSize: "14px",
                    color: "black",
                    userSelect: "text",
                  }}
                >
                  {user?.primaryEmailAddress?.emailAddress}
                </div>
                <SignOutButton>
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "white",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            )}
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}