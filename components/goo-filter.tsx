import { SVGProps } from "react";

export function GooFilter(props: SVGProps<SVGFilterElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			className="absolute top-0 left-0 w-0 h-0"
		>
			<defs>
				<filter {...props}>
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="10"
						result="blur"
					/>
					<feColorMatrix
						in="blur"
						type="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -20"
						result="goo"
					/>
					<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</defs>
		</svg>
	);
}
