gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".reason-item");

gsap.to(sections, {
	xPercent: -97.25 * (sections.length - 1),
	ease: "none",
	snap: 1 / (sections.length - 1),
	scrollTrigger: {
		trigger: ".reason-container",
		pin: true,
		scrub: 1,
		// base vertical scrolling on how wide the container is so it feels more natural.
		end: "+=5000",
	},
});
