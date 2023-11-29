"use client";
import React, { useState, useEffect } from "react";
import { NAVBAR_LIST } from "@/constants";
import Link from "next/link";
import Image from "next/image";

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
    isScrolled ? "bg-white z-50 shadow-md" : "bg-transparent"
  }`;

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Image
              src="/icon/menu.svg"
              alt="menu icon"
              width={30}
              height={30}
              className="cursor-pointer text-black"
            />
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
          className={`btn btn-ghost text-lg hover:text-black ${
            isScrolled ? "text-gray-20 scrolled" : "text-white"
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
                isScrolled ? "text-gray-20 scrolled" : "text-white"
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
