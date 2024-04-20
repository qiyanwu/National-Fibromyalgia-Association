"use client";

import { NavBarContainer, activeStyling, hoverStyling } from "./NavBar.styles";
import { useEffect, useState } from "react";

function ResearcherNavBar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => {
      if (window !== undefined) {
        setCurrentPath(window.location.pathname);
      }
    };
    window.addEventListener("popstate", updatePath);
    return () => {
      window.removeEventListener("popstate", updatePath);
    };
  }, []);

  const isActive = (path) => {
    return currentPath === path ? true : false;
  };

  return (
    <nav className={NavBarContainer}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">National Fibromyalgia Association</h1>
        <div>
          <a
            href="/login"
            className={`px-2 ${hoverStyling} ${
              isActive("/login") ? activeStyling : ""
            }`}
          >
            Login
          </a>
          <a
            href="/admin-dashboard"
            className={`px-2 ${hoverStyling} ${
              isActive("/admin-dashboard") ? activeStyling : ""
            }`}
          >
            Dashboard
          </a>
          <a
            href="/admin-past-studies"
            className={`px-2 ${hoverStyling} ${
              isActive("/admin-past-studies") ? activeStyling : ""
            }`}
          >
            Archive
          </a>
          <a
            href="/admin-participant-info"
            className={`px-2 ${hoverStyling} ${
              isActive("/admin-participant-info") ? activeStyling : ""
            }`}
          >
            Particpant Info
          </a>
          <a
            href="/admin-pending"
            className={`px-2 
            hover:bg-primary 
            hover:text-white
            hover:shadow-lg
            bg-white border border-2 text-primary rounded-lg py-1`}
          >
            Pending Studies
          </a>
        </div>
      </div>
    </nav>
  );
}

export default ResearcherNavBar;
