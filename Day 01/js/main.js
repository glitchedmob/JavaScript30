// Cache list of keys
var keys = document.getElementsByClassName("key");

// Cache list of audio tags
var audioTags = document.getElementsByTagName("audio");

// Add event listener for keydown
document.addEventListener("keydown", function(e) {
	var keyPressed = e.which || e.keyCode;
	checkKey(keyPressed, "down");
});

// Add event listener for keyup
document.addEventListener("keyup", function(e) {
	var keyUnpressed = e.which || e.keyCode;
	checkKey(keyUnpressed, "up");
})

function checkKey(keyPressed, direction) {	
	for(var i = 0; i < keys.length; i++) {

		var dataKey = Number(keys[i].getAttribute("data-key"));

		if(keyPressed === dataKey) {
			if (direction === "down") {	
				playSound(keyPressed);
				addClass(keys[i], "playing");
			} else if (direction === "up") {
				removeClass(keys[i], "playing");
			} else {
				console.error("Incorrect parameter passed to function checkKey()")
			}
		}
	}
}


function playSound(soundKey) {
	for(var i = 0; i < audioTags.length; i++) {
		if (soundKey === Number(audioTags[i].getAttribute("data-key"))) {
			audioTags[i].play();
		}
	}
}

function addClass(element, classToAdd) {
	element.className += " " + classToAdd;
} 

function removeClass(element, classToRemove) {
	var reg = new RegExp('\b' + classToRemove + "\b");
	element.className.replace(reg, '');
} 