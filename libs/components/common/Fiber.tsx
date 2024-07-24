import {
	Canvas,
	Euler,
	ExtendedColors,
	Layers,
	Matrix4,
	NodeProps,
	NonFunctionKeys,
	Overwrite,
	Quaternion,
	Vector3,
} from '@react-three/fiber';
import { useGLTF, AccumulativeShadows, RandomizedLight, Environment, CameraControls } from '@react-three/drei';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';
import { Group } from 'three';

export default function Fiber() {
	return (
		<Canvas shadows camera={{ position: [5, 0, 5], fov: 35 }}>
			<ambientLight intensity={Math.PI} />
			<Shoe position={[0, 0, 0.85]} />
			<Shoe position={[0, 0, -0.85]} rotation={[0, 0.5, Math.PI]} scale={-1} />
			<AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
				<RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
			</AccumulativeShadows>
			<CameraControls />
			<Environment preset="city" />
		</Canvas>
	);
}

function Shoe(
	props: JSX.IntrinsicAttributes &
		Omit<
			ExtendedColors<Overwrite<Partial<Group>, NodeProps<Group, Group>>>,
			NonFunctionKeys<{
				position?: Vector3;
				up?: Vector3;
				scale?: Vector3;
				rotation?: Euler;
				matrix?: Matrix4;
				quaternion?: Quaternion;
				layers?: Layers;
				dispose?: (() => void) | null;
			}>
		> & {
			position?: Vector3;
			up?: Vector3;
			scale?: Vector3;
			rotation?: Euler;
			matrix?: Matrix4;
			quaternion?: Quaternion;
			layers?: Layers;
			dispose?: (() => void) | null;
		} & EventHandlers,
) {
	//@ts-ignore
	const { nodes, materials } = useGLTF('/shoe.gltf');
	return (
		//@ts-ignore
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
			<mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
		</group>
	);
}
