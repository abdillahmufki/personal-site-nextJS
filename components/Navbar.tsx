"use client";
import React from "react";

import { usePathname } from "next/navigation";
import { NAVBAR_LIST } from "@/constants";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// Navbar component
const Navbar = () => {
  const router = usePathname();
  const isPostPage = router?.includes("/post/") ?? false;
  const isScrolled = useScroll();

  // If on the "/post/" route, render the NavbarBlog component
  if (isPostPage) {
    return <NavbarBlog />;
  }

  const navClass = `fixed z-50 lg:px-5 top-0 ease-in-out text-gray-20 transition-transform duration-300 transform ${
    isScrolled
      ? "-translate-y-full dark:bg-slate-900 bg-white z-50"
      : "translate-y-0 bg-gray-10 dark:bg-slate-900  shadow-sm"
  }`;

  return (
    // Render Navbar based on conditions
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className={`w-5 h-5 text-gray-20 dark:text-white ${
                isScrolled ? "scrolled" : ""
              }`}
            />
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
                  className="hover:font-semibold hover:text-gray-20">
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
              : "text-gray-20 dark:text-white dark:hover:text-blue-90"
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

const NavbarBlog = () => {
  const isScrolled = useScroll();
  const navClass = `fixed z-50 lg:px-5 top-0 ease-in-out text-gray-20 transition-transform duration-300 transform ${
    isScrolled
      ? "-translate-y-full dark:bg-slate-900 bg-white z-50"
      : "translate-y-0 bg-gray-10 dark:bg-slate-900  shadow-sm"
  }`;
  return (
    <div className={`navbar ${navClass}`}>
      <div className="flex-1 max-[800px]:hidden">
        <Link
          href="/"
          className="text-gray-20 dark:text-white dark:hover:text-blue-50 hover:text-blue-50 text-xl font-semibold">
          Abdillah Mufki Auzan Mubin
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className="text-gray-20 dark:text-white text-lg font-semibold dark:hover:text-blue-50 hover:text-blue-50">
              Home
              <FontAwesomeIcon icon={faRightFromBracket} className="ms-2" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
