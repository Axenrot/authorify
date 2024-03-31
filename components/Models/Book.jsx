import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Book(props) {
  const { nodes, materials } = useGLTF("/models/book.glb");

  const texture = useTexture(`/images/cover3.png`);
  const bookCover = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0.5, // between 0 and 1, higher values make the material look more like a metal
    roughness: 0.4,
  });
  const bookFace = new THREE.PlaneGeometry(0.75, 1.0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x4f90c3, // green color in hex
    metalness: 0.5, // between 0 and 1, higher values make the material look more like a metal
    roughness: 0.4, // between 0 and 1, lower values make the material shinier and thus more reflective
  });

  const bookRef = useRef(null);
  const [preventEffect, setPreventEffect] = useState(true);

  useEffect(() => {
    if (!preventEffect) {
      console.log(bookRef.current);
      gsap.fromTo(
        bookRef.current,
        {
          x: 200,
          y: 500,
        },
        {
          // altere os valores conforme necessário
          x: -200,
          y: -500,
          rotationY: 60,
          ease: "none",
          scrollTrigger: {
            trigger: "#heroCanva",
            start: "10px top",
            end: "100% top",
            scrub: true,
            markers: true,
          },
        }
      );
    } else {
      gsap.registerPlugin(ScrollTrigger);
      setPreventEffect(false);
    }
  }, [preventEffect]);

  return (
    <group ref={bookRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          receiveShadow
          castShadow
          geometry={bookFace}
          material={bookCover}
          position={[0.4, 0, 0.001]}
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
