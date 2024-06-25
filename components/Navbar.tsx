"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { navLinks } from "./navbar-links";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
import clsx from "clsx";
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDrawerOpen(event.target.checked);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    // Check if the window object is available
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // Add event listener only if the window object is available
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="drawer z-50">
      <input
        id="navbar"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={handleCheckboxChange}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={clsx(
            "fixed navbar h-12 bg-white w-full transition-transform duration-300",
            showNavbar ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="navbar"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 justify-end md:justify-start px-2 mx-2">
            <Link href="/">
              <Image src={logo} alt="Bachata & More" width={60} height={60} />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.label}
                  className="rounded-md text-lg p-3 bg-none hover:bg-bm-main hover:text-white "
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full bg-white">
          <div>
            <label
              htmlFor="navbar"
              aria-label="close sidebar"
              className="btn btn-square btn-ghost float-right"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 18L18 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          {/* Sidebar content here */}
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.path}
                onClick={closeDrawer}
                className="rounded-md text-lg p-3  hover:bg-bm-main hover:text-white "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <nav className="hidden md:flex  justify-between items-center h-28 p-4">
    //   <Link href="/">
    //     <Image src={logo} alt="Bachata & More" width={100} height={1} />
    //   </Link>

    //   <ul className="flex justify-between gap-x-4  max-w-[1000px]  items-center">
    //     {navLinks.map((link) => (
    //       <Link
    //         href={link.path}
    //         key={link.label}
    //         className="rounded-md text-lg p-3 hover:bg-bm-main hover:text-white "
    //       >
    //         {link.label}
    //       </Link>
    //     ))}
    //   </ul>
    // </nav>
  );
}

export default Navbar;
