// animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll(ref: MutableRefObject<THREE.Group>) {
  if (ref.current) {
    gsap.to(ref.current.position, {
      x: -2,
      y: -1,
      z: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#heroCanva",
        start: "10px top",
        end: "100% top",
        scrub: 2,
      },
    });

    gsap.to(ref.current.rotation, {
      z: -1,
      y: 2,
      x: -2,
      ease: "none",
      scrollTrigger: {
        trigger: "#heroCanva",
        start: "10px top",
        end: "100% top",
        pin: true,
        scrub: 2,
      },
    });
  }
}

export function animateBook(ref: MutableRefObject<THREE.Group>) {
  // Move up and down
  gsap.to(ref.current.position, {
    y: "+=0.05", // adjust this value to change the amplitude of the movement
    repeat: -1, // repeat indefinitely
    yoyo: true, // go back and forth
    duration: 2, // adjust this value to change the speed of the movement
    ease: "power1.inOut", // this easing function gives a smooth, breathing effect
  });

  // Rotate
  gsap.to(ref.current.rotation, {
    y: "+=0.05", // adjust this value to change the amplitude of the rotation
    // x: "+=0.1",
    // z: "-=0.2",
    repeat: -1, // repeat indefinitely
    yoyo: true, // go back and forth
    duration: 2, // adjust this value to change the speed of the rotation
    ease: "power1.inOut", // this easing function gives a smooth, breathing effect
  });
}

export function animatePhone(ref: MutableRefObject<THREE.Group>) {
  // Move up and down
  gsap.to(ref.current.position, {
    y: "-=0.05", // adjust this value to change the amplitude of the movement
    repeat: -1, // repeat indefinitely
    yoyo: true, // go back and forth
    duration: 2, // adjust this value to change the speed of the movement
    ease: "power1.inOut", // this easing function gives a smooth, breathing effect
  });

  // Rotate
  gsap.to(ref.current.rotation, {
    y: "-=0.05", // adjust this value to change the amplitude of the rotation
    // x: "+=0.1",
    z: "+=0.2",
    repeat: -1, // repeat indefinitely
    yoyo: true, // go back and forth
    duration: 2, // adjust this value to change the speed of the rotation
    ease: "power1.inOut", // this easing function gives a smooth, breathing effect
  });
}

export function enterScene(ref: MutableRefObject<THREE.Group>) {
  gsap.fromTo(
    ref.current.position,
    {
      z: 5,
      // y: -1,
    },
    {
      z: 0, // end at the initial position
      y: 0,
      x: 0,
      duration: 3,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    ref.current.rotation,
    { z: Math.PI * 2 },
    {
      z: 0,
      ease: "power1.inOut",
      duration: 3,
    }
  );
}

export function enterPhone(ref: MutableRefObject<THREE.Group>) {
  gsap.fromTo(
    ref.current.position,
    {
      z: 100,
      // y: -1,
    },
    {
      z: 0, // end at the initial position
      y: 0,
      x: 0,
      delay: 1,
      duration: 3,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    ref.current.rotation,
    { x: Math.PI },
    {
      x: 0,
      ease: "power1.inOut",
      duration: 3,
      delay: 1,
    }
  );
}

export function brokersReveal() {
  gsap.fromTo(
    ".broker",
    {
      opacity: 0,
      translateY: -50,
    },
    {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
      translateY: 0,
      stagger: 0.1,
      // delay: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".broker",
        start: "top bottom",
        toggleActions: "play none resume reset",
      },
    }
  );
}

export function brokersTitleReveal() {
  gsap.fromTo(
    ".broker-title",
    {
      opacity: 0,
      letterSpacing: "0.25em",
      lineHeight: "0%",
      // translateY: -50,
    },
    {
      opacity: 1,
      lineHeight: "100%",
      letterSpacing: "0.1em",
      duration: 2,
      delay: 0.2,
      translateY: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".broker-title",
        start: "top bottom",
        toggleActions: "play none resume reset",
      },
    }
  );
}

export function authorifyReveal() {
  gsap.fromTo(
    ".logo",
    {
      opacity: 0,
      translateY: -50,
    },
    {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
      translateY: 0,
      stagger: 0.1,
      // delay: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".logo",
        start: "top bottom",
        toggleActions: "play none resume reset",
      },
    }
  );
}

// 0% {
//   line-height: 0%;
//   letter-spacing: 0.25em;
//   opacity: 0;
// }
// 25% {
//   line-height: 0%;
//   opacity: 0%;
// }
// 80% {
//   opacity: 100%;
// }
// 100% {
//   line-height: 100%;
//   opacity: 100%;
// }
