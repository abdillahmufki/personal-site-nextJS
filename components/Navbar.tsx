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

  const navClass = `fixed z-50 lg:px-5 ease-in ease-out duration-300 ${
    isScrolled ? "dark:bg-slate-900 bg-white z-50 shadow-md" : "bg-transparent"
  }`;

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1024 1024">
              <path
                fill="#B6BBC4"
                d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"
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
                  className="hover:font-semibold text-white dark:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className={`btn btn-ghost text-lg hover:text-black ${
            isScrolled ? "text-gray-20 scrolled dark:text-white" : "text-white"
          } max-[526px]:hidden me-3`}>
          Abdillah Mufki Auzan Mubin
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAVBAR_LIST.map((item, index) => (
            <li
              key={index}
              className={`${
                isScrolled
                  ? "text-gray-20 scrolled dark:text-white"
                  : "text-white"
              }`}>
              <Link
                href={item.href}
                className="hover:font-semibold hover:text-gray-20">
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
