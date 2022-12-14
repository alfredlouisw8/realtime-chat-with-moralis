import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
	const { isAuthenticated } = useMoralis();

	if (!isAuthenticated) return <Login />;

	return (
		<div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
			<Head>
				<title>Metaverse Challenge</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Login />
		</div>
	);
}
