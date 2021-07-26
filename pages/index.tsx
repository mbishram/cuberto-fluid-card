import Head from "next/head";
import FluidCard from "@components/FluidCard";

export default function Home() {
	return (
		<>
			<Head>
				<title>{`Cuberto's Fluid Card`}</title>
				<meta
					name="description"
					content="Implementation of Cuberto's Fluid Card"
				/>
			</Head>

			<main className="container mx-auto px-4 h-screen grid place-items-center">
				<FluidCard />
			</main>
		</>
	);
}
