import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function BookAnim(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/book_low_poly.glb");
  const { actions } = useAnimations(animations, group);

  const texture = useTexture(`/images/printed-books-slider.png`);
  const bodyMaterial = new THREE.MeshBasicMaterial({
    map: texture,
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4971421506f647598e0b01bb5de0c074fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Light"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[23.909, 35.225, 48.54]}
                  rotation={[Math.PI, 1.097, 2.58]}
                  scale={100}
                >
                  <group name="Object_8" />
                </group>
                <group
                  name="Obj_Book"
                  position={[7.134, 0.039, 0]}
                  rotation={[-Math.PI / 2, 1.565, 0]}
                  scale={100}
                />
                <group
                  name="Obj_Book_Armature"
                  rotation={[-Math.PI / 2, 1.565, 0]}
                  scale={100}
                >
                  <group name="Object_11">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.White}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials["White.001"]}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <group
                      name="Object_13"
                      position={[7.134, 0.039, 0]}
                      rotation={[-Math.PI / 2, 1.565, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
