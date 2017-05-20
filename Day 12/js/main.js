const pressed = [];
const secretcode = "levizitting";

window.addEventListener("keyup", (e) => {
	pressed.push(e.key);
	pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);
	console.log(pressed)

	if(pressed.join("").includes(secretcode)) {
		cornify_add()
	}
})