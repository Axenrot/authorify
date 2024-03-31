import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Phone({ selectedOption, ...props }) {
  const { nodes, materials } = useGLTF("/models/old_phone.glb");
  const width = 9;
  const height = 16;
  const geometry = new THREE.PlaneGeometry(width, height);
  const textureLoader = new THREE.TextureLoader();
  const texture = useRef(null);
  texture.current = textureLoader.load(
    `/assets/screens/${selectedOption}-mobile.png`
  );

  useEffect(() => {
    texture.current = textureLoader.load(
      `/assets/screens/${selectedOption}-mobile.png`
    );

    //eslint-disable-next-line
  }, [selectedOption]);

  // Create a material with the loaded texture
  const bodyMaterial = new THREE.MeshBasicMaterial({
    map: texture.current,
    opacity: 0.9,
    transparent: true,
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={bodyMaterial}
        // position={[-7.625, -0.488, 21.35]}
        position={[0, 0.075, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.26}
      />

      <group scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pasted__pCube2_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-7.625, -0.488, 21.35]}
          rotation={[-0.852, 0, Math.PI]}
          scale={[3.378, 0.225, 0.948]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube1_lambert1_0.geometry}
          material={materials.lambert1}
          scale={[25.13, 4.139, 43.549]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder2_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, 0.082, 19.328]}
          scale={0.693}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pasted__pasted__pCube2_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-12.125, -0.488, 16.738]}
          rotation={[-1.407, -1.485, 1.744]}
          scale={[1.619, 0.257, 0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube2_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, -0.499, -21.284]}
          rotation={[-1.467, 0, -Math.PI]}
          scale={[-7.751, 0.109, 0.637]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder3_lambert1_0.geometry}
          material={materials.lambert1}
          position={[8.888, -0.424, 21.236]}
          rotation={[2.277, 0, 0]}
          scale={[0.616, 0.142, 0.616]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pasted__pCube3_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-12.125, -0.488, 8.257]}
          rotation={[-1.466, -1.485, 1.681]}
          scale={[2.555, 0.257, 0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube3_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-12.125, -0.488, 11.213]}
          rotation={[-1.466, -1.485, 1.681]}
          scale={[2.555, 0.257, 0.479]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCylinder2_lambert1_0.geometry}
          material={materials.lambert1}
          position={[-7.711, -1.4, 17.18]}
          scale={[1.194, 0.71, 1.194]}
        />
      </group>
    </group>
  );
}
