import anime, { AnimeParams } from "animejs";
import { MutableRefObject } from "react";

export class FluidCardUtils {
	private readonly bottomCard: HTMLElement;
	private readonly buttonIcon: HTMLElement;
	private readonly bottomCardContent: HTMLElement;
	private fluidString: HTMLElement;

	// Shared animation parameters between opening and closing animation
	private openAnimationParams: AnimeParams = {
		duration: 1000,
		easing: "easeOutExpo",
	};
	private buttonAnimationParams: AnimeParams = {
		duration: 500,
		easing: "easeOutQuint",
	};
	private contentAnimationParams: AnimeParams = {
		duration: 200,
		easing: "easeOutQuint",
	};
	private fluidStringAnimationParams: AnimeParams = {
		easing: "easeInOutSine",
		duration: 300,
	};

	constructor({
		bottomCardRef,
		buttonIconRef,
		bottomCardContentRef,
		fluidStringRef,
	}: {
		bottomCardRef: MutableRefObject<any>;
		buttonIconRef: MutableRefObject<any>;
		bottomCardContentRef: MutableRefObject<any>;
		fluidStringRef: MutableRefObject<any>;
	}) {
		this.bottomCard = bottomCardRef.current;
		this.buttonIcon = buttonIconRef.current;
		this.bottomCardContent = bottomCardContentRef.current;
		this.fluidString = fluidStringRef.current;
	}

	openCard = () => {
		this.buttonIcon.parentElement?.setAttribute(
			"aria-label",
			"Lebih sedikit."
		);

		this.openAnimation();
	};

	closeCard = () => {
		this.buttonIcon.parentElement?.setAttribute(
			"aria-label",
			"Selengkapnya."
		);

		this.closeAnimation();
	};

	private openAnimation = () => {
		anime({
			targets: this.bottomCard,
			...this.openAnimationParams,
			marginTop: "4.5rem",
		});

		anime({
			targets: this.buttonIcon,
			...this.buttonAnimationParams,
			rotate: "180deg",
		});

		anime({
			targets: this.bottomCardContent,
			...this.contentAnimationParams,
			opacity: 1,
		});

		// Fluid strings
		anime({
			targets: this.fluidString.children[0].children[0],
			...this.fluidStringAnimationParams,
			translateY: ["15%", "-50%"],
			delay: 300,
		});
		anime({
			targets: this.fluidString.children[0].children[1],
			...this.fluidStringAnimationParams,
			translateY: ["-15%", "50%"],
			delay: 300,
		});
		anime({
			targets: this.fluidString.children[1].children[0],
			...this.fluidStringAnimationParams,
			translateY: ["15%", "-50%"],
			delay: 350,
		});
		anime({
			targets: this.fluidString.children[1].children[1],
			...this.fluidStringAnimationParams,
			translateY: ["-15%", "50%"],
			delay: 350,
		});
		anime({
			targets: this.fluidString.children[2].children[0],
			...this.fluidStringAnimationParams,
			translateY: ["15%", "-50%"],
			delay: 300,
		});
		anime({
			targets: this.fluidString.children[2].children[1],
			...this.fluidStringAnimationParams,
			translateY: ["-15%", "50%"],
			delay: 300,
		});
		anime({
			targets: this.fluidString.children[3].children[0],
			...this.fluidStringAnimationParams,
			translateY: ["15%", "-60%"],
			delay: 250,
		});
		anime({
			targets: this.fluidString.children[3].children[1],
			...this.fluidStringAnimationParams,
			translateY: ["-15%", "40%"],
			delay: 250,
		});
	};

	private closeAnimation = () => {
		anime({
			targets: this.bottomCard,
			...this.openAnimationParams,
			marginTop: "-7rem",
		});

		anime({
			targets: this.buttonIcon,
			...this.buttonAnimationParams,
			rotate: "0deg",
		});

		anime({
			targets: this.bottomCardContent,
			...this.contentAnimationParams,
			opacity: 0,
		});

		// Fluid strings
		anime({
			targets: this.fluidString.children[0].children[0],
			...this.fluidStringAnimationParams,
			translateY: "2rem",
		});
		anime({
			targets: this.fluidString.children[0].children[1],
			...this.fluidStringAnimationParams,
			translateY: "0",
		});
		anime({
			targets: this.fluidString.children[1].children[0],
			...this.fluidStringAnimationParams,
			translateY: "0",
		});
		anime({
			targets: this.fluidString.children[1].children[1],
			...this.fluidStringAnimationParams,
			translateY: "-2rem",
		});
		anime({
			targets: this.fluidString.children[2].children[0],
			...this.fluidStringAnimationParams,
			translateY: "2rem",
		});
		anime({
			targets: this.fluidString.children[2].children[1],
			...this.fluidStringAnimationParams,
			translateY: "0",
		});
		anime({
			targets: this.fluidString.children[3].children[0],
			...this.fluidStringAnimationParams,
			translateY: "0",
		});
		anime({
			targets: this.fluidString.children[3].children[1],
			...this.fluidStringAnimationParams,
			translateY: "-2rem",
		});
	};
}
