const password = prompt("Input Our Date (ddmmyy): ", "");
if (password === "210124") {
	document.getElementById("body").style.display = "block";
}

const reasonContainer = document.getElementById("reason-container");

const csvFile = `reason,background
"we 'clicked' from day 1","1.jpg"
"with you, a day felt like a minute","2.jpg"
"i love the sound of your laugh","3.jpg"
"with you, work is fun!","4.jpg"
"being with you at the start of the day, boosted my mood","5.jpg"
"seeing you after a long day, made my burdens go away","6.jpg"
"every day with you felt like a dream","7.jpg"
"every moment with you, i want it to last forever","8.jpg"
"being sleepy together is kinda our thing","9.jpg"
"you made me proud, my favorite person","10.jpg"
"eating good food or ordinary food is always special with you","11.jpg"
"the sad days, the good days, the disappointing days, it's all better with you","12.jpg"
"efforts you did to be with me","13.jpg"
"sacrifices you made to be with me","14.jpg"
"unforgettable moments with you","15.jpg"
"i disappointed you over, and over, and over, yet you are still here","16.jpg"
"the silly faces we did taking pictures","17.jpg"
"thoughtful gifts you gave","18.jpg"
"the moments where we talked for hours while you lay your head on me","19.jpg"
"tons and tons of adventure we did (yes going around the mall counts!)","20.jpg"
"your acceptance of me","21.jpg"
"your will to push through your fear for me","22.jpg"
"your tears and cries dropped for me","23.jpg"
"your understanding for whatever my condition is","24.jpg"
"moments where we are the only 2 people laughing in the room","25.jpg"
`;

var data = $.csv.toObjects(csvFile);
for (let i = 0; i < data.length; i++) {
	const backgroundIndex = i + 1;
	const reasonItem = document.createElement("div");
	const reasonTitleElement = document.createElement("H1");
	const reasonTitleText = document.createTextNode(data.at(i).reason);

	reasonItem.className = "reason-item";
	reasonItem.style.backgroundImage =
		"linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(assets/100/" +
		backgroundIndex +
		".jpg)";

	reasonItem.style.animation = "fade-in 1.5s forwards";
	reasonItem.style.backgroundSize = "contain";
	reasonItem.style.backgroundPositionY = "center";
	reasonTitleElement.appendChild(reasonTitleText);
	reasonItem.appendChild(reasonTitleElement);
	reasonContainer.appendChild(reasonItem);
}

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
