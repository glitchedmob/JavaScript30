const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {

	

	// Our code only runs if the checkbox is checked 
	// and the shift key is being held down
	if(e.shiftKey && this.checked) {
		// Flag to be used later while looping through checboxes
		let inBetween = false;

		checkBoxes.forEach(checkBox => {

			// Check if the current checkbox in our loop is equal
			// the checkbox we clicked on or the last one we clicked on
			if(checkBox === this || checkBox === lastChecked) {
				inBetween = !inBetween;
			}

			if(inBetween) {
				checkBox.checked = true;
			}
		});
	}

	// Update last checked to be the element that was clicked on.
	lastChecked = this;
}

checkBoxes.forEach(checkBox => {
	checkBox.addEventListener("click", handleCheck);
})