"use client";
import React, { ChangeEvent, useState } from "react";
import { navLinks } from "./navbar-links";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDrawerOpen(event.target.checked);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

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
        <div className="w-full navbar bg-white">
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
              <Image src={logo} alt="Bachata & More" width={80} height={1} />
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
        <label
          htmlFor="navbar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white">
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
