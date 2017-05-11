// Cache list of audio tags
var audioTags = document.getElementsByTagName("audio");

document.addEventListener("keydown", playAudio);


function playAudio(e) {
	var keyPressed = e.witch || e.keyCode;

	// Find audio tag and button
	var button = document.querySelector("div[data-key='" + keyPressed + "'");
	var audioTag = document.querySelector("audio[data-key='" + keyPressed + "'");

	// Play corresponding audio file
	audioTag.currentTime = 0;
	audioTag.play();

	addClass(button, "playing");
}

// Add audio ended event listeners for all audio tags
for (var i = 0; i < audioTags.length; i++) {
	audioTags[i].addEventListener("ended", audioEnded);
}

function audioEnded(e) {
	var dataKey = e.currentTarget.getAttribute("data-key");
	var button = document.querySelector("div[data-key='" + dataKey + "'");

	removeClass(button, "playing")
}

function addClass(element, classToAdd) {
	var reg = new RegExp('(\\s|^)' + classToAdd + '(\\s|$)');

	// Checks that class isn't already added to element
	if (!element.className.match(reg)){
		element.className += " " + classToAdd;
	}
} 

function removeClass(element, classToRemove) {
	var reg = new RegExp('(\\s|^)' + classToRemove + '(\\s|$)');

	// Checks that class is added to element before removing
	if (element.className.match(reg)) {
		element.className = element.className.replace(reg, '');
	}
	
} 