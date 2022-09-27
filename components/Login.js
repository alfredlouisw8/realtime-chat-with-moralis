import Image from "next/image";
import { useMoralis } from "react-moralis";

export default function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-black relative">
			<h1>I am the login screen</h1>
			<div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
				<Image
					className="object-cover rounded-full"
					src="/images/profile.jpg"
					height={200}
					width={200}
				/>

				<button
					onClick={authenticate}
					className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
				>
					Login to the METAVERSE
				</button>
			</div>

			<div className="w-full h-screen">
				<Image src="/images/bg.jpeg" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}
