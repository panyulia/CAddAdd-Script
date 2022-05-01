try {
//
document.getElementsByTagName("body")[0].innerHTML;
var documentElement = document.documentElement;
var $=function(text) {
	if (text == document) {
		return document.body;
	} else if (text == document.documentElement) {
		return document.documentElement;
	} else if (text.slice(0,1) == "#") {
		return document.getElementById(text.slice(1,text.length));
	} else if (text.slice(0,1) == ".") {
		if (document.getElementsByClassName(text.slice(1,text.length)).length == 1) {
			return document.getElementsByClassName(text.slice(1,text.length))[0];
		} else {
			return document.getElementsByClassName(text.slice(1,text.length));
		}
	} else {
		if (document.getElementsByTagName(text).length == 1) {
			return document.getElementsByTagName(text)[0];
		} else {
			return document.getElementsByTagName(text);
		}
	}
}
var github=function(){window.open("https://github.com/panyulia/Javascript");}
var clear=function(){console.clear();}
var log=function(text){console.log(text);}
var warn=function(text){console.warn(text);}
var error=function(text){console.error(text);}
for (var i=0;i <= $("*").length-1;i++) {
	$("*")[i].html = function(text) {
		if (text != undefined) {
			this.innerHTML = text;
			return this.innerHTML;
		} else {
			return this.innerHTML;
		}
	}
	$("*")[i].get = function(text) {
		return this;
	}
	$("*")[i].click = function(f,) {
		this.onclick=f;
	}
}
var sup={
	correct : function(text){
		return text.charCodeAt();
	},
	anti : function(text){
		return String.fromCharCode(text);
	},
	correct_batch : function(text){
		var temp="";
		for (var i=0;i<=text.length-1;i++){
			temp = temp+sup.correct(text.slice(i,i+1))+",";
		}
		temp = temp.slice(0,temp.length-1);
		return "["+temp+"]";
	},
	anti_batch : function(text){
		var temp="";
		for (var i=0;i<=text.length-1;i++){
			temp = temp+sup.anti(text.slice(i,i+1));
		}
		return temp;
	}
}
$(document).style
//
}
catch(err) {console.error("Error: not defer");}
