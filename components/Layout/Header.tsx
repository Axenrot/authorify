"use client";
import { useState, useEffect, useRef } from "react";

import MobileNav from "./MobileNav";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [preventEffect, setPreventEffect] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!preventEffect) {
      gsap.to(headerRef.current, {
        backgroundPosition: "0% 0%", // altere os valores conforme necessário
        ease: "none",
        scrollTrigger: {
          trigger: document.body, // agora o gatilho é a janela, já que o cabeçalho é fixo
          start: "10px top", // quando o topo da janela de visualização atinge o topo
          end: "10% top", // quando a parte inferior da janela de visualização atinge o topo
          scrub: true,
        },
      });
    } else {
      gsap.registerPlugin(ScrollTrigger);
      setPreventEffect(false);
    }
  }, [preventEffect]);

  return (
    <>
      <header
        id="header"
        ref={headerRef}
        className="fixed z-10 top-0 left-0 flex items-center justify-between w-full h-20 text-white bg-gradient-to-b transition-all duration-300 bg-size-300 bg-pos-100 from-black via-black/80 to-transparent"
      >
        <span className="container px-3 flex items-center justify-between gap-14 mx-auto">
          {/* LOGO */}
          <span className="w-[210px] lg:w-[300px] flex gap-2 items-center select-none justify-start text-white">
            <Image
              src="/logo-white.png"
              alt="Authorify Logo"
              className="w-[30px] lg:w-[50px]"
              width={50}
              height={50}
            />
            <span className="title text-xl lg:text-3xl">authorify</span>
          </span>

          <nav className="w-full flex items-center h-20">
            <button
              className="ml-auto transition-all duration-200 md:hidden fadein active:scale-110"
              onClick={() => setShowMenu((old) => !old)}
            >
              Menu
              {/* <AiOutlineMenu className="text-3xl text-white transition-all duration-200 cursor-pointer hover:text-blue-200" /> */}
            </button>

            {showMenu && <MobileNav showMenu={showMenu} />}

            <DesktopNav />
          </nav>
        </span>
      </header>
    </>
  );
}
