"use client";
import React from "react";
import { NAVBAR_LIST } from "@/constants";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const isScrolled = useScroll();

  const navClass = `fixed z-50 lg:px-5 top-0 ease-in-out transition-transform duration-300 transform ${
    isScrolled
      ? "-translate-y-full dark:bg-slate-900 bg-white z-50 shadow-md"
      : "translate-y-0 bg-gray-10 dark:bg-slate-900 "
  }`;

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NAVBAR_LIST.map((item, index) => (
              <li
                key={index}
                className={`${
                  isScrolled
                    ? "text-gray-20 scrolled dark:text-white"
                    : "text-gray-20"
                }`}>
                <Link
                  href={item.href}
                  className="hover:font-semibold hover:text-gray-10">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className={`btn btn-ghost text-lg hover:text-gray-400 ${
            isScrolled
              ? "text-gray-20 scrolled dark:text-white"
              : "text-gray-20 dark:text-white"
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
                  ? "text-gray-20 scrolled dark:text-white hover:text-gray-400"
                  : "text-gray-20 dark:text-white"
              }`}>
              <Link href={item.href} className="hover:font-semibold ">
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
