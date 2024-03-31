"use client";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Book from "@/components/Models/Book";
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
  const bookPosition = useRef<object>(width < 1024 ? [0, 5, -6] : [8, 0, -6]);
  const dirLight = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    bookPosition.current = width < 1024 ? [0, 5, -6] : [8, 0, -6];
  }, [width]);

  return (
    <span id="heroCanva" className="relative h-[100vh] w-full flex flex-col">
      <Canvas
        camera={{ fov: 100, near: 0.01, far: 1000, position: cameraPosition }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight
          ref={dirLight}
          intensity={1}
          position={[-30, 5, 60]}
        />
        <directionalLight
          ref={dirLight}
          intensity={2}
          position={[50, 10, -40]}
        />

        {/* <Controls /> */}

        {/* <BookAnim
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[1.2, 0, 0.5]}
        /> */}
        {/* <Book
          scale={[10, 10, 10]}
          position={[4, -3, -4]}
          rotation={[1.5, 0, 0.4]}
        />
        <Book
          scale={[10, 10, 10]}
          position={[6, -1.5, -5]}
          rotation={[1.5, 0, 0.4]}
        /> */}

        <Book
          scale={[10, 10, 10]}
          position={bookPosition.current}
          rotation={[1.5, 0, 0.4]}
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
