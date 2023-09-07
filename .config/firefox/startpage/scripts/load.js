window.onload = function () {
	var backgrounds = [
		"aang",
		"chihiro",
		"diane",
		"kida",
		"madeline",
		"mia",
		"mulan",
		"shinobu",
		"toothless",
		"violet",
		"walle",
	];
	var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	var backgroundUrl = `url(\"/Users/brandonmpark/Pictures/Icons/wall/${background}_wall.png\")`;
	document.querySelector("body").style.backgroundImage = backgroundUrl;
};
