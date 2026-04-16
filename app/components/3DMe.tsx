import { assetURL } from "@/utils/assets";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type AlvaroProps = {
    action?: "hi" | "lookAt";
    jump?: boolean;
    lookAt?: ModelLookAt;
    size?: number
};

export function ThreeDMe({ size = 210, action, jump, lookAt }: AlvaroProps) {
    return (
        <Canvas style={{ width: `${size}px`, height: `${size}px` }} camera={{ position: [0, 2, 3] }}>
            <AlvaroModel action={action} jump={jump} lookAt={lookAt} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 0, 5]} color={"white"} />
            <CameraLookAtTarget />
        </Canvas>
    );
}

type ModelLookAt = "front" | "left" | "right" | "back";


function AlvaroModel({ action = "hi", jump = false, lookAt = "front" }: AlvaroProps) {
    const speed = 0.15;
    const group = useRef<THREE.Group>(null!);
    const url = assetURL("models/alvaro.glb");
    const { scene, animations } = useGLTF(url);
    const { actions } = useAnimations(animations, group);

    const rotation = getLookAtRotation(lookAt);
    const position = [0, 5, 0];

    useEffect(() => {
        if (!group.current) return;
        group.current.rotation.y = rotation;
    }, [lookAt]);

    useFrame(() => {
        if (!group.current) return;
        if (group.current?.position.y > 0) {
            group.current.position.y -= speed;
            if (group.current?.position.y < 0) group.current.position.y = 0;
        }
    });

    useEffect(() => {
        if (action == "hi") actions?.hi?.reset().play();
        else actions?.lookAt?.reset().play();
    }, [actions, action]);

    return <primitive ref={group} object={scene} position={position} />;
}

function CameraLookAtTarget({ target = new THREE.Vector3(0, 1, 0) }: { target?: THREE.Vector3 }) {
    const { camera } = useThree();

    useFrame(() => {
        camera.lookAt(target);
    });

    return null;
}

function getLookAtRotation(lookAt: ModelLookAt) {
    switch (lookAt) {
        case "front":
            return 0;
        case "left":
            return Math.PI / 6;
        case "right":
            return -Math.PI / 6;
        case "back":
            return -Math.PI;
    }
}
