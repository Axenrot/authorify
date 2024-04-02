"use client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Book from "@/components/Models/Book";
import { useEffect, useRef } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const BooksScene = () => {
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

        <Book
          scale={bookScale.current}
          position={bookPosition.current}
          rotation={bookRotation.current}
        />
      </Canvas>
    </span>
  );
};

export default BooksScene;

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
