"use client";
import { useState, useEffect } from "react";

import MobileNav from "./MobileNav";
// import { DesktopMenu } from "./Navigation/DesktopMenu";
import Image from "next/image";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const headerElement = document.getElementById("header");

    if (headerElement) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      });

      observer.observe(headerElement);

      return () => {
        observer.unobserve(headerElement);
      };
    }
  }, []);

  return (
    <>
      <header
        id="header"
        className="absolute top-0 left-0 flex items-center justify-between w-full h-20 text-white bg-gradient-to-b bg-size-200 from-black to-blue-blue7"
      >
        <span className="container flex items-center justify-between px-3 mx-auto">
          {/* LOGO */}
          <span className="flex gap-2 items-center justify-center text-black">
            <Image
              src="/authorify_logo_black.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className="title">authorify</span>
          </span>

          <nav className="relative flex items-center h-20">
            <button
              className="transition-all duration-200 md:hidden fadein active:scale-110"
              onClick={() => setShowMenu((old) => !old)}
            >
              Menu
              {/* <AiOutlineMenu className="text-3xl text-white transition-all duration-200 cursor-pointer hover:text-blue-200" /> */}
            </button>

            {showMenu && isHeaderVisible && <MobileNav showMenu={showMenu} />}

            {/* <DesktopMenu color={"white"} /> */}
          </nav>
        </span>
      </header>

      <div
        className={`${
          isHeaderVisible && "-translate-y-full"
        } transition-all duration-500 fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 text-blue-blue6 bg-gradient-to-b from-white to-gray-300 shadow-md shadow-black/30`}
      >
        <span className="container flex items-center justify-between px-3 mx-auto">
          <Image
            src="/authorify_logo_black.png"
            alt="Logo"
            width={50}
            height={50}
          />

          <nav className="relative flex items-center h-20">
            <button
              className="transition-all duration-200 md:hidden fadein active:scale-110"
              onClick={() => setShowMenu((old) => !old)}
            >
              MENU
              {/* <AiOutlineMenu className="text-3xl transition-all duration-200 cursor-pointer hover:text-blue-200 text-blue-blue6" /> */}
            </button>

            {showMenu && !isHeaderVisible && <MobileNav showMenu={showMenu} />}

            {/* <DesktopMenu color={"blue-blue6"} /> */}
          </nav>
        </span>
      </div>
    </>
  );
}
