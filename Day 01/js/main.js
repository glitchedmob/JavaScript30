// Cache list of keys
var keys = document.getElementsByClassName("key");

// Cache list of audio tags
var audioTags = document.getElementsByTagName("audio");

// Add event listener for keydown
document.addEventListener("keydown", function(e) {
	var keyPressed = e.which || e.keyCode;
	checkKey(keyPressed, "down");
});


function checkKey(keyPressed, direction) {	
	for(var i = 0; i < keys.length; i++) {

		var dataKey = Number(keys[i].getAttribute("data-key"));

		if(keyPressed === dataKey) {
			playSound(keyPressed);
			addClass(keys[i], "playing");
		}
	}
}

function playSound(soundKey) {
	for(var i = 0; i < audioTags.length; i++) {
		if (soundKey === Number(audioTags[i].getAttribute("data-key"))) {
			audioTags[i].play();
			audioTags[i].addEventListener("ended", function() {
				//
			});
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