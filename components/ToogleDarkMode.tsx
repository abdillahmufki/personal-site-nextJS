"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const ToggleDarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const toggleButtonText =
    theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <div className="bg-blue-90 rounded-full w-10 h-10 flex justify-center items-center">
      <button
        className={`w-fit p-5 rounded-full hover:scale-110 active:scale-100 duration-200 text-gray-10 `}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={toggleButtonText}>
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} className="w-5 h-5  text-white" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="w-5 h-5  text-white" />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
