import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animatePhone, enterPhone } from "@/utils/animations";

export default function Phone(props) {
  const { nodes, materials } = useGLTF("/models/smartphone.glb");
  const phoneRef = useRef(null);

  const shinyBlackMaterial = new THREE.MeshStandardMaterial({
    color: 0x39c0ed, // black
    metalness: 1, // make it very metallic
    roughness: 0, // make it very smooth/shiny
  });

  const texture = useTexture(`/images/cover-phone.png`);
  const phoneScreen = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0.5, // between 0 and 1, higher values make the material look more like a metal
    roughness: 0.4,
    transparent: true,
    opacity: 0.9,
  });

  function createRoundedRect(width, height, radius) {
    var shape = new THREE.Shape();
    shape.moveTo(radius, 0);
    shape.lineTo(width - radius, 0);
    shape.quadraticCurveTo(width, 0, width, radius);
    shape.lineTo(width, height - radius);
    shape.quadraticCurveTo(width, height, width - radius, height);
    shape.lineTo(radius, height);
    shape.quadraticCurveTo(0, height, 0, height - radius);
    shape.lineTo(0, radius);
    shape.quadraticCurveTo(0, 0, radius, 0);
    return shape;
  }

  // Create a shape for the iPhone screen
  var shape = createRoundedRect(1, 1.05, 0.15);

  // Create a geometry from the shape
  var geometry = new THREE.ShapeGeometry(shape);

  // Create a material
  var material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // useEffect(() => {
  //   animatePhone(phoneRef);
  //   enterPhone(phoneRef);
  // }, []);
  return (
    <group ref={phoneRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={shinyBlackMaterial}
        rotation={[0, 0, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={phoneScreen}
        scale={[5.5, 10.9, 5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[-0.08, 0.32, 2.75]}
      />
    </group>
  );
}
