var $=function(text) {
	return document.querySelector(text);
}

function correct(text) {
	return text.charCodeAt();
}

function anti(text) {
	return String.fromCharCode(text);
}