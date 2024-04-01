import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateBook, enterScene, animateOnScroll } from "@/utils/animations";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Book(props) {
  const { nodes, materials } = useGLTF("/models/book.glb");
  const { width } = useWindowDimensions();

  const texture = useTexture(`/images/cover.png`);
  const bookCover = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0, // between 0 and 1, higher values make the material look more like a metal
    roughness: 0.4,
  });
  const bookFace = new THREE.PlaneGeometry(0.72, 1.0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x4f90c3, // green color in hex
    metalness: 0.7, // between 0 and 1, higher values make the material look more like a metal
    roughness: 0.4, // between 0 and 1, lower values make the material shinier and thus more reflective
  });

  const bookRef = useRef(null);
  const bookParentRef = useRef(null);
  const [preventEffect, setPreventEffect] = useState(true);

  useEffect(() => {
    if (!preventEffect) {
      enterScene(bookRef);
      animateOnScroll(bookParentRef);
    } else {
      gsap.registerPlugin(ScrollTrigger);
      setPreventEffect(false);
    }
  }, [preventEffect]);

  useEffect(() => {
    if (!preventEffect) {
      animateBook(bookRef);
    }
  }, [preventEffect, width]);

  return (
    <group ref={bookParentRef} {...props} dispose={null}>
      <group ref={bookRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <mesh
          receiveShadow
          castShadow
          geometry={bookFace}
          material={bookCover}
          position={[0.405, 0, 0.002]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Architexture_0.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Architexture_1.geometry}
          material={materials.Bookpage}
        />
      </group>
    </group>
  );
}
