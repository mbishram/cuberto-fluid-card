import style from "@styles/FluidCard.module.css";
import { FluidCardUtils } from "../utils/fluid-card-utils";
import { useEffect, useRef, useState } from "react";
import { GooFilter } from "@components/goo-filter";

export default function FluidCard() {
	const [fluidCardUtils, setFluidCardUtils] = useState<FluidCardUtils>();
	const [isCardOpen, setIsCardOpen] = useState(false);

	const bottomCardRef = useRef(null);
	const buttonIconRef = useRef(null);
	const bottomCardContentRef = useRef(null);
	const fluidStringRef = useRef(null);

	const handleOpenButtonClicked = () => {
		if (!isCardOpen) fluidCardUtils?.openCard();
		else fluidCardUtils?.closeCard();

		setIsCardOpen(!isCardOpen);
	};

	useEffect(() => {
		// Setup Fluid Card Utils
		setFluidCardUtils(
			new FluidCardUtils({
				bottomCardRef,
				buttonIconRef,
				bottomCardContentRef,
				fluidStringRef,
			})
		);
	}, [bottomCardRef, buttonIconRef, bottomCardContentRef, fluidStringRef]);

	return (
		<>
			<GooFilter id="goo-filter" />

			<article className="w-full text-white max-w-xs relative">
				<div className={style.filter}>
					{/* Top Part / Header */}
					<div className="h-64 bg-blue-700 p-12 rounded-3xl grid place-content-center relative z-20">
						<div className="text-center">
							<div
								aria-label="Gambar lorem ipsum"
								className="bg-white rounded-lg text-red-500 font-bold font-mono grid place-content-center w-20 h-20 mx-auto mb-6"
							>
								<span
									ref={buttonIconRef}
									className="material-icons text-5xl"
								>
									subject
								</span>
							</div>
							<h1 className="text-2xl font-semibold mb-1.5">
								Lorem Ipsum
							</h1>
							<p className="inline-flex items-center">
								<button className="mr-1 h-8 w-8 grid place-content-center opacity-75 hover:opacity-100">
									<span className="material-icons">
										volume_up
									</span>
								</button>{" "}
								<span className="opacity-75">lorem-ipsum</span>
							</p>
						</div>
					</div>

					{/* Bottom Part / Description */}
					<div
						ref={bottomCardRef}
						className="h-44 bg-blue-700 p-12 rounded-3xl grid place-content-center relative z-10 -mt-28"
					>
						<div
							ref={bottomCardContentRef}
							className="text-center opacity-0"
						>
							<h1 className="text-2xl font-semibold mb-2.5">
								A Placeholder
							</h1>
							<p className="inline-flex items-center">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Reprehenderit, sed!
							</p>
						</div>
					</div>

					{/* Fluid String */}
					<div
						ref={fluidStringRef}
						className="absolute flex z-0 top-1/2 h-44 transform-gpu -translate-y-12"
					>
						<div>
							<div className="bg-blue-700 w-10 h-1/2 ml-4 rounded-xl" />
							<div className="bg-blue-700 w-10 h-1/2 ml-4 rounded-xl" />
						</div>
						<div>
							<div className="bg-blue-700 w-16 h-1/2 ml-8 rounded-xl" />
							<div className="bg-blue-700 w-16 h-1/2 ml-8 rounded-xl" />
						</div>
						<div>
							<div className="bg-blue-700 w-4 h-1/2 ml-16 rounded-xl" />
							<div className="bg-blue-700 w-4 h-1/2 ml-16 rounded-xl" />
						</div>
						<div>
							<div className="bg-blue-700 w-12 h-3/5 ml-6 rounded-xl" />
							<div className="bg-blue-700 w-12 h-2/5 ml-6 rounded-xl" />
						</div>
					</div>
				</div>
				<button
					onClick={handleOpenButtonClicked}
					aria-label="Selengkapnya."
					className="filter-none bg-white hover:bg-gray-200 text-blue-700 absolute z-50 top-64 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 w-12 h-12 shadow-md rounded-lg grid place-content-center"
				>
					<span
						ref={buttonIconRef}
						className="material-icons text-3xl"
					>
						expand_more
					</span>
				</button>
			</article>
		</>
	);
}
