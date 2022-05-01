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
	$("*")[i].click = function(f) {
		this.onclick=f;
	}
//
//
//
	$("*")[i].abort = function(f) {
		this.onabort=f;
	}
	$("*")[i].afterprint = function(f) {
		this.onafterprint=f;
	}
	$("*")[i].animationend = function(f) {
		this.onanimationend=f;
	}
	$("*")[i].animationiteration = function(f) {
		this.onanimationiteration=f;
	}
	$("*")[i].animationstart = function(f) {
		this.onanimationstart=f;
	}
	$("*")[i].auxclick = function(f) {
		this.onauxclick=f;
	}
	$("*")[i].beforecopy = function(f) {
		this.onbeforecopy=f;
	}
	$("*")[i].beforecut = function(f) {
		this.onbeforecut=f;
	}
	$("*")[i].beforepaste = function(f) {
		this.onbeforepaste=f;
	}
	$("*")[i].beforeprint = function(f) {
		this.onbeforeprint=f;
	}
	$("*")[i].beforeunload = function(f) {
		this.onbeforeunload=f;
	}
	$("*")[i].beforexrselect = function(f) {
		this.onbeforexrselect=f;
	}
	$("*")[i].blur = function(f) {
		this.onblur=f;
	}
	$("*")[i].cancel = function(f) {
		this.oncancel=f;
	}
	$("*")[i].canplay = function(f) {
		this.oncanplay=f;
	}
	$("*")[i].canplaythrough = function(f) {
		this.oncanplaythrough=f;
	}
	$("*")[i].change = function(f) {
		this.onchange=f;
	}
	$("*")[i].click = function(f) {
		this.onclick=f;
	}
	$("*")[i].close = function(f) {
		this.onclose=f;
	}
	$("*")[i].contextlost = function(f) {
		this.oncontextlost=f;
	}
	$("*")[i].contextmenu = function(f) {
		this.oncontextmenu=f;
	}
	$("*")[i].contextrestored = function(f) {
		this.oncontextrestored=f;
	}
	$("*")[i].copy = function(f) {
		this.oncopy=f;
	}
	$("*")[i].cuechange = function(f) {
		this.oncuechange=f;
	}
	$("*")[i].cut = function(f) {
		this.oncut=f;
	}
	$("*")[i].dblclick = function(f) {
		this.ondblclick=f;
	}
	$("*")[i].drag = function(f) {
		this.ondrag=f;
	}
	$("*")[i].dragend = function(f) {
		this.ondragend=f;
	}
	$("*")[i].dragenter = function(f) {
		this.ondragenter=f;
	}
	$("*")[i].dragleave = function(f) {
		this.ondragleave=f;
	}
	$("*")[i].dragover = function(f) {
		this.ondragover=f;
	}
	$("*")[i].dragstart = function(f) {
		this.ondragstart=f;
	}
	$("*")[i].drop = function(f) {
		this.ondrop=f;
	}
	$("*")[i].durationchange = function(f) {
		this.ondurationchange=f;
	}
	$("*")[i].emptied = function(f) {
		this.onemptied=f;
	}
	$("*")[i].ended = function(f) {
		this.onended=f;
	}
	$("*")[i].error = function(f) {
		this.onerror=f;
	}
	$("*")[i].focus = function(f) {
		this.onfocus=f;
	}
	$("*")[i].formdata = function(f) {
		this.onformdata=f;
	}
	$("*")[i].fullscreenchange = function(f) {
		this.onfullscreenchange=f;
	}
	$("*")[i].fullscreenerror = function(f) {
		this.onfullscreenerror=f;
	}
	$("*")[i].gotpointercapture = function(f) {
		this.ongotpointercapture=f;
	}
	$("*")[i].hashchange = function(f) {
		this.onhashchange=f;
	}
	$("*")[i].input = function(f) {
		this.oninput=f;
	}
	$("*")[i].invalid = function(f) {
		this.oninvalid=f;
	}
	$("*")[i].keydown = function(f) {
		this.onkeydown=f;
	}
	$("*")[i].keypress = function(f) {
		this.onkeypress=f;
	}
	$("*")[i].keyup = function(f) {
		this.onkeyup=f;
	}
	$("*")[i].languagechange = function(f) {
		this.onlanguagechange=f;
	}
	$("*")[i].load = function(f) {
		this.onload=f;
	}
	$("*")[i].loadeddata = function(f) {
		this.onloadeddata=f;
	}
	$("*")[i].loadedmetadata = function(f) {
		this.onloadedmetadata=f;
	}
	$("*")[i].loadstart = function(f) {
		this.onloadstart=f;
	}
	$("*")[i].lostpointercapture = function(f) {
		this.onlostpointercapture=f;
	}
	$("*")[i].message = function(f) {
		this.onmessage=f;
	}
	$("*")[i].messageerror = function(f) {
		this.onmessageerror=f;
	}
	$("*")[i].mousedown = function(f) {
		this.onmousedown=f;
	}
	$("*")[i].mouseenter = function(f) {
		this.onmouseenter=f;
	}
	$("*")[i].mouseleave = function(f) {
		this.onmouseleave=f;
	}
	$("*")[i].mousemove = function(f) {
		this.onmousemove=f;
	}
	$("*")[i].mouseout = function(f) {
		this.onmouseout=f;
	}
	$("*")[i].mouseover = function(f) {
		this.onmouseover=f;
	}
	$("*")[i].mouseup = function(f) {
		this.onmouseup=f;
	}
	$("*")[i].mousewheel = function(f) {
		this.onmousewheel=f;
	}
	$("*")[i].offline = function(f) {
		this.onoffline=f;
	}
	$("*")[i].online = function(f) {
		this.ononline=f;
	}
	$("*")[i].pagehide = function(f) {
		this.onpagehide=f;
	}
	$("*")[i].pageshow = function(f) {
		this.onpageshow=f;
	}
	$("*")[i].paste = function(f) {
		this.onpaste=f;
	}
	$("*")[i].pause = function(f) {
		this.onpause=f;
	}
	$("*")[i].play = function(f) {
		this.onplay=f;
	}
	$("*")[i].playing = function(f) {
		this.onplaying=f;
	}
	$("*")[i].pointercancel = function(f) {
		this.onpointercancel=f;
	}
	$("*")[i].pointerdown = function(f) {
		this.onpointerdown=f;
	}
	$("*")[i].pointerenter = function(f) {
		this.onpointerenter=f;
	}
	$("*")[i].pointerleave = function(f) {
		this.onpointerleave=f;
	}
	$("*")[i].pointermove = function(f) {
		this.onpointermove=f;
	}
	$("*")[i].pointerout = function(f) {
		this.onpointerout=f;
	}
	$("*")[i].pointerover = function(f) {
		this.onpointerover=f;
	}
	$("*")[i].pointerrawupdate = function(f) {
		this.onpointerrawupdate=f;
	}
	$("*")[i].pointerup = function(f) {
		this.onpointerup=f;
	}
	$("*")[i].popstate = function(f) {
		this.onpopstate=f;
	}
	$("*")[i].progress = function(f) {
		this.onprogress=f;
	}
	$("*")[i].ratechange = function(f) {
		this.onratechange=f;
	}
	$("*")[i].rejectionhandled = function(f) {
		this.onrejectionhandled=f;
	}
	$("*")[i].reset = function(f) {
		this.onreset=f;
	}
	$("*")[i].resize = function(f) {
		this.onresize=f;
	}
	$("*")[i].scroll = function(f) {
		this.onscroll=f;
	}
	$("*")[i].search = function(f) {
		this.onsearch=f;
	}
	$("*")[i].securitypolicyviolation = function(f) {
		this.onsecuritypolicyviolation=f;
	}
	$("*")[i].seeked = function(f) {
		this.onseeked=f;
	}
	$("*")[i].seeking = function(f) {
		this.onseeking=f;
	}
	$("*")[i].select = function(f) {
		this.onselect=f;
	}
	$("*")[i].selectionchange = function(f) {
		this.onselectionchange=f;
	}
	$("*")[i].selectstart = function(f) {
		this.onselectstart=f;
	}
	$("*")[i].slotchange = function(f) {
		this.onslotchange=f;
	}
	$("*")[i].stalled = function(f) {
		this.onstalled=f;
	}
	$("*")[i].storage = function(f) {
		this.onstorage=f;
	}
	$("*")[i].submit = function(f) {
		this.onsubmit=f;
	}
	$("*")[i].suspend = function(f) {
		this.onsuspend=f;
	}
	$("*")[i].timeupdate = function(f) {
		this.ontimeupdate=f;
	}
	$("*")[i].toggle = function(f) {
		this.ontoggle=f;
	}
	$("*")[i].transitioncancel = function(f) {
		this.ontransitioncancel=f;
	}
	$("*")[i].transitionend = function(f) {
		this.ontransitionend=f;
	}
	$("*")[i].transitionrun = function(f) {
		this.ontransitionrun=f;
	}
	$("*")[i].transitionstart = function(f) {
		this.ontransitionstart=f;
	}
	$("*")[i].unhandledrejection = function(f) {
		this.onunhandledrejection=f;
	}
	$("*")[i].unload = function(f) {
		this.onunload=f;
	}
	$("*")[i].volumechange = function(f) {
		this.onvolumechange=f;
	}
	$("*")[i].waiting = function(f) {
		this.onwaiting=f;
	}
	$("*")[i].webkitanimationend = function(f) {
		this.onwebkitanimationend=f;
	}
	$("*")[i].webkitanimationiteration = function(f) {
		this.onwebkitanimationiteration=f;
	}
	$("*")[i].webkitanimationstart = function(f) {
		this.onwebkitanimationstart=f;
	}
	$("*")[i].webkitfullscreenchange = function(f) {
		this.onwebkitfullscreenchange=f;
	}
	$("*")[i].webkitfullscreenerror = function(f) {
		this.onwebkitfullscreenerror=f;
	}
	$("*")[i].webkittransitionend = function(f) {
		this.onwebkittransitionend=f;
	}
	$("*")[i].wheel = function(f) {
		this.onwheel=f;
	}
//
//
//
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
catch(err) {
	if (err.message === true) {
		console.error('Error: not defer');
	} else {
		console.error(err.message);
	}
}
