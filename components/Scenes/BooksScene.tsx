"use client";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Book from "@/components/Models/Book";
import Phone from "@/components/Models/Phone";
import BookAnim from "@/components/Models/BookAnim";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ScrollTrigger } from "gsap/ScrollTrigger";

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const { width } = useWindowDimensions();
  const cameraDistance = useRef<number>(width < 768 ? 10 : 10);

  const controlsRef = useRef<any>();

  useEffect(() => {
    cameraDistance.current = width < 768 ? 15 : 12;
  }, [width]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Check if the left mouse button is pressed
      const LEFT_MOUSE_BUTTON_VALUE = 1;
      if (event.buttons !== LEFT_MOUSE_BUTTON_VALUE) {
        const { clientX, clientY } = event;
        const mouseX = (clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(clientY / window.innerHeight) * 2 + 1;

        // Update the OrbitControls target based on mouse movement
        const targetX = mouseX * 2;
        const targetY = mouseY * 1;

        gsap.to(controlsRef.current.target, {
          x: targetX,
          y: targetY,
          z: 0,
          duration: 0.5,
        });
      }
    };

    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enablePan={true}
      // minDistance={cameraDistance.current}
      // maxDistance={cameraDistance.current}
      // minAzimuthAngle={-0.3}
      // maxAzimuthAngle={0.3}
      // minPolarAngle={1}
      // maxPolarAngle={1.8}
    />
  );
};

const BooksScene = ({ index = 1 }) => {
  const { width } = useWindowDimensions();
  const cameraPosition = new THREE.Vector3(-0.8, 1.3, 10);
  const phonePosition = useRef<object>(width < 1024 ? [-3, -5, 0] : [5, -3, 0]);
  const bookPosition = useRef<object>(width < 1024 ? [1, -5, -6] : [6, 0, -6]);
  const bookRotation = useRef<object>(
    width < 1024 ? [0, -0.55, 0.05] : [0, -0.9, 0.05]
  );
  const dirLight = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    phonePosition.current = width < 1024 ? [-3, -5, 0] : [5, -3, 0];
    bookPosition.current = width < 1024 ? [1, -5, -6] : [6, 0, -6];
    bookRotation.current = width < 1024 ? [0, -0.55, 0.05] : [0, -0.9, 0.05];
  }, [width]);

  return (
    <span id="heroCanva" className="relative h-[100vh] w-full flex flex-col">
      <Canvas
        camera={{ fov: 100, near: 0.01, far: 1000, position: cameraPosition }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight
          ref={dirLight}
          intensity={2.2}
          position={[-15, 10, 10]}
        />
        <directionalLight
          ref={dirLight}
          intensity={2.2}
          position={[10, 10, 10]}
        />

        {/* <Controls /> */}

        {/* <Phone
          scale={[0.5, 0.5, 0.5]}
          position={phonePosition.current}
          rotation={[Math.PI, -Math.PI / 2, Math.PI / 2]}
        /> */}
        <Book
          scale={[8, 10, 20]}
          position={bookPosition.current}
          rotation={bookRotation.current}
        />
        {/* <Phone
          position={[-4, -0.2, 2.7]}
          rotation={[1.2, Math.PI, 0]}
        /> */}
      </Canvas>
    </span>
  );
};

export default BooksScene;
