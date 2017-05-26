const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsEl = document.querySelector("#bands");

// Removes a the and an from a string
function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, "").trim();
}

bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

bands.forEach(band => {bandsEl.innerHTML += `<li>${band}</li>`});