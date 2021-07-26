import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>{`Cuberto's Liquid Card`}</title>
				<meta
					name="description"
					content="Implementation of Cuberto's Liquid Card"
				/>
			</Head>

			<main className="container mx-auto px-4 h-screen grid place-items-center">
				<article className="w-full text-white max-w-xs">
					<div className="h-64 bg-blue-700 p-12 rounded-3xl grid place-content-center relative z-10">
						<div className="text-center">
							<div className="bg-white rounded-lg text-red-500 font-bold font-mono text-3xl grid place-content-center w-20 h-20 mx-auto mb-6">
								li
							</div>
							<h1 className="text-2xl font-semibold mb-1.5">
								Lorem Ipsum
							</h1>
							<p className="inline-flex items-center opacity-75">
								<button className="mr-1 h-8 w-8 grid place-content-center">
									<span className="material-icons">
										volume_up
									</span>
								</button>{" "}
								lorem-ipsum
							</p>
						</div>
						<button className="bg-white hover:bg-gray-200 text-blue-700 absolute bottom-0 left-1/2 transform-gpu -translate-x-1/2 translate-y-1/2 w-12 h-12 shadow-md rounded-lg grid place-content-center">
							<span className="material-icons text-3xl">
								expand_more
							</span>
						</button>
					</div>
					<div className="h-44 bg-blue-700 p-12 rounded-3xl grid place-content-center relative z-0 -mt-28">
						<div className="text-center opacity-0">
							<h1 className="text-2xl font-semibold mb-2.5">
								A Placeholder
							</h1>
							<p className="inline-flex items-center">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Reprehenderit, sed!
							</p>
						</div>
					</div>
				</article>
			</main>
		</>
	);
}
