"use client";
import React, { useState, useEffect } from "react";
import { NAVBAR_LIST } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = `fixed z-50 lg:px-5  ${
    isScrolled ? "bg-white z-50 shadow-md" : "bg-white"
  }`;

  return (
    <nav className={`navbar ${navClass} ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-gray-20 text-white rounded-box w-52">
            {NAVBAR_LIST.map((item, index) => (
              <li key={index} className="text-black">
                <Link
                  href={item.href}
                  className="hover:font-semibold text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-lg hover:text-black text-gray-20 max-[526px]:hidden me-3">
          Abdillah Mufki Auzan Mubin
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAVBAR_LIST.map((item, index) => (
            <li key={index} className="text-gray-20">
              <Link
                href={item.href}
                className="hover:font-semibold hover:text-black">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
