"use client";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Book from "@/components/Models/Book";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// extend({ OrbitControls });

// const Controls = () => {
//   const { camera, gl } = useThree();
//   const { width } = useWindowDimensions();
//   const cameraDistance = useRef<number>(width < 768 ? 10 : 10);

//   const controlsRef = useRef<any>();

//   useEffect(() => {
//     cameraDistance.current = width < 768 ? 15 : 12;
//   }, [width]);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       // Check if the left mouse button is pressed
//       const LEFT_MOUSE_BUTTON_VALUE = 1;
//       if (event.buttons !== LEFT_MOUSE_BUTTON_VALUE) {
//         const { clientX, clientY } = event;
//         const mouseX = (clientX / window.innerWidth) * 2 - 1;
//         const mouseY = -(clientY / window.innerHeight) * 2 + 1;

//         // Update the OrbitControls target based on mouse movement
//         const targetX = mouseX * 2;
//         const targetY = mouseY * 1;

//         gsap.to(controlsRef.current.target, {
//           x: targetX,
//           y: targetY,
//           z: 0,
//           duration: 0.5,
//         });
//       }
//     };

//     const isMobile = window.innerWidth <= 768;
//     if (!isMobile) {
//       window.addEventListener("mousemove", handleMouseMove);
//     }
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <OrbitControls
//       ref={controlsRef}
//       args={[camera, gl.domElement]}
//       enablePan={true}
//       // minDistance={cameraDistance.current}
//       // maxDistance={cameraDistance.current}
//       // minAzimuthAngle={-0.3}
//       // maxAzimuthAngle={0.3}
//       // minPolarAngle={1}
//       // maxPolarAngle={1.8}
//     />
//   );
// };

function handlePosition(width: number) {
  switch (true) {
    case width <= 640: // Smaller than 'sm'
      return [-0.4, 0, 0];
    case width <= 768: // 'sm'
      return [-0.4, 0, 0];
    case width <= 1024: // 'md'
      return [-0.4, 0, 0];
    case width <= 1280: // 'lg'
      return [0.66, 0, 0];
    case width <= 1536: // 'xl'
      return [0.75, 0.2, 0];
    case width <= 1700: // '2xl'
      return [1.05, 0.2, 0];
    default:
      return [0.9, 0.2, 0];
  }
}

function handleScale(width: number) {
  switch (true) {
    case width <= 640: // Smaller than 'sm'
      return [1, 1, 2];
    case width <= 768: // 'sm'
      return [1, 1, 2];
    case width <= 1024: // 'md'
      return [1, 1, 2];
    case width <= 1280: // 'lg'
      return [1.2, 1.2, 3];
    case width <= 1536: // 'xl'
      return [1.5, 1.5, 3];
    case width <= 1700: // '2xl'
      return [1.5, 1.5, 3];
    default:
      return [1.5, 1.5, 3];
  }
}

function handleRotation(width: number) {
  switch (true) {
    case width <= 640: // Smaller than 'sm'
      return [0.2, -0.25, 0];
    case width <= 768: // 'sm'
      return [0.2, -0.25, 0];
    case width <= 1024: // 'md'
      return [0.2, -0.25, 0];
    case width <= 1280: // 'lg'
      return [0.2, -0.35, 0];
    case width <= 1536: // 'xl'
      return [0.25, -0.35, 0.05];
    case width <= 1700: // '2xl'
      return [0.25, -0.35, 0.05];
    default:
      return [0.25, -0.35, 0.05];
  }
}

function frontLightPosition(width: number) {
  let pos = handlePosition(width);

  let output = new THREE.Vector3(pos[0], pos[1] + 3, pos[2] + 10);
  return output;
}

function backLightPosition(width: number) {
  let pos = handlePosition(width);

  let output = new THREE.Vector3(pos[0], pos[1] + 3, pos[2] - 10);
  return output;
}

const BooksScene = ({ index = 1 }) => {
  const { width, height } = useWindowDimensions();
  const cameraPosition = new THREE.Vector3(0, 0, 10);

  const bookScale = useRef<object>(handleScale(width));
  const bookPosition = useRef<object>(handlePosition(width));
  const bookRotation = useRef<object>(handleRotation(width));
  const dirLight = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    bookScale.current = handleScale(width);
    bookPosition.current = handlePosition(width);
    bookRotation.current = handleRotation(width);
  }, [width]);

  return (
    <span id="heroCanva" className="relative h-[100vh] w-full flex flex-col">
      <Canvas
        camera={{
          fov: 20,
          aspect: width / height,
          near: 0.01,
          far: 1000,
          position: cameraPosition,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          ref={dirLight}
          intensity={1}
          position={backLightPosition(width)}
        />
        <directionalLight
          ref={dirLight}
          intensity={2}
          position={frontLightPosition(width)}
        />

        {/* <Controls /> */}

        {/* <Phone
          scale={[0.5, 0.5, 0.5]}
          position={phonePosition.current}
          rotation={[Math.PI, -Math.PI / 2, Math.PI / 2]}
        /> */}
        <Book
          scale={bookScale.current}
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
