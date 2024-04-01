// animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll(ref: MutableRefObject<THREE.Group>) {
  if (ref.current) {
    gsap.to(ref.current.position, {
      x: -4,
      y: 1,
      z: 5,
      ease: "none",
      scrollTrigger: {
        trigger: "#heroCanva",
        start: "10px top",
        end: "100% top",
        scrub: 2,
        markers: true,
      },
    });

    gsap.to(ref.current.rotation, {
      z: -5,
      // y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#heroCanva",
        start: "10px top",
        end: "100% top",
        scrub: 2,
        markers: true,
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
