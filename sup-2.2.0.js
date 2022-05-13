var github=function(){window.open("https://github.com/panyulia/Javascript");}
var clear=function(){console.clear();}
var log=function(text){console.log(text);}
var warn=function(text){console.warn(text);}
var error=function(text){console.error(text);}

var nameX=function(selector) {
	if (selector == undefined || selector == null || selector == "" || selector == false) {
		this.name=document.getElementsByTagName("");
	} else if (selector == document) {
		this.name=document.body;
	} else if (selector == document.documentElement) {
		this.name=document.documentElement;
	} else if (selector.slice(0,1) == "#") {
		this.name=document.getElementById(selector.slice(1,selector.length));
	} else if (selector.slice(0,1) == ",") {
		this.name=document.createElement(selector.slice(1,selector.length));
	} else if (selector.slice(0,1) == ".") {
		this.name=document.getElementsByClassName(selector.slice(1,selector.length));
	} else {
		this.name=document.getElementsByTagName(selector);
	}
}
var sup={
	get : function(selector) {
		this.name=[];
		if (selector == undefined || selector == null || selector == "" || selector == false) {
			this.name=document.getElementsByTagName("");
			var temp=new nameX(selector).name;
		} else if ((typeof selector == 'function') == true) {
			window.setTimeout(function(){
				window.onload=selector;
				return selector();
			},0)
		} else if (selector == document) {
			this.name=document.getElementsByTagName("body");
			var temp=new nameX(selector).name;
		} else if (selector.slice(0,1) == "#") {
			this.name=document.getElementById(selector.slice(1,selector.length));
			var temp=new nameX(selector).name;
		} else if (selector.slice(0,1) == ",") {
			this.name=document.createElement(selector.slice(1,selector.length));
			var temp=new nameX(selector).name[0];
		} else if (selector.slice(0,1) == ".") {
			for (var i=0;i<=document.getElementsByClassName(selector.slice(1,selector.length)).length-1;i++) {
				this.name.push(document.getElementsByClassName(selector.slice(1,selector.length))[i]);
			}
			var temp=new nameX(selector).name[0];
		} else {
			for (var i=0;i<=document.getElementsByTagName(selector).length-1;i++) {
				this.name.push(document.getElementsByTagName(selector)[i]);
			}
			var temp=new nameX(selector).name[0];
		}
		this.o=typeof selector;
		var name=this.name;
		this.__proto__={
			html : function(text) {
				if (text == undefined || text == null || text == "" || text == false) {
					return temp.innerHTML;
				} else {
					return temp.innerHTML=text;
				}
			},
			val : function(text) {
				if (text == undefined || text == null || text == "" || text == false) {
					return temp.value;
				} else {
					return temp.value=text;
				}
			},
			animationend : function(f) {temp.onanimationend=f;},
			animationiteration : function(f) {temp.onanimationiteration=f;},
			animationstart : function(f) {temp.onanimationstart=f;},
			auxclick : function(f) {temp.onauxclick=f;},
			beforecopy : function(f) {temp.onbeforecopy=f;},
			beforecut : function(f) {temp.onbeforecut=f;},
			beforepaste : function(f) {temp.onbeforepaste=f;},
			beforexrselect : function(f) {temp.onbeforexrselect=f;},
			blur : function(f) {temp.onblur=f;},
			cancel : function(f) {temp.oncancel=f;},
			canplay : function(f) {temp.oncanplay=f;},
			canplaythrough : function(f) {temp.oncanplaythrough=f;},
			change : function(f) {temp.onchange=f;},
			click : function(f) {temp.onclick=f;},
			close : function(f) {temp.onclose=f;},
			contextlost : function(f) {temp.oncontextlost=f;},
			contextmenu : function(f) {temp.oncontextmenu=f;},
			contextrestored : function(f) {temp.oncontextrestored=f;},
			copy : function(f) {temp.oncopy=f;},
			cuechange : function(f) {temp.oncuechange=f;},
			cut : function(f) {temp.oncut=f;},
			dblclick : function(f) {temp.ondblclick=f;},
			drag : function(f) {temp.ondrag=f;},
			dragend : function(f) {temp.ondragend=f;},
			dragenter : function(f) {temp.ondragenter=f;},
			dragleave : function(f) {temp.ondragleave=f;},
			dragover : function(f) {temp.ondragover=f;},
			dragstart : function(f) {temp.ondragstart=f;},
			drop : function(f) {temp.ondrop=f;},
			durationchange : function(f) {temp.ondurationchange=f;},
			emptied : function(f) {temp.onemptied=f;},
			ended : function(f) {temp.onended=f;},
			error : function(f) {temp.onerror=f;},
			focus : function(f) {temp.onfocus=f;},
			formdata : function(f) {temp.onformdata=f;},
			fullscreenchange : function(f) {temp.onfullscreenchange=f;},
			fullscreenerror : function(f) {temp.onfullscreenerror=f;},
			gotpointercapture : function(f) {temp.ongotpointercapture=f;},
			input : function(f) {temp.oninput=f;},
			invalid : function(f) {temp.oninvalid=f;},
			keydown : function(f) {temp.onkeydown=f;},
			keypress : function(f) {temp.onkeypress=f;},
			keyup : function(f) {temp.onkeyup=f;},
			loadeddata : function(f) {temp.onloadeddata=f;},
			loadedmetadata : function(f) {temp.onloadedmetadata=f;},
			loadstart : function(f) {temp.onloadstart=f;},
			lostpointercapture : function(f) {temp.onlostpointercapture=f;},
			mousedown : function(f) {temp.onmousedown=f;},
			mouseenter : function(f) {temp.onmouseenter=f;},
			mouseleave : function(f) {temp.onmouseleave=f;},
			mousemove : function(f) {temp.onmousemove=f;},
			mouseout : function(f) {temp.onmouseout=f;},
			mouseover : function(f) {temp.onmouseover=f;},
			mouseup : function(f) {temp.onmouseup=f;},
			mousewheel : function(f) {temp.onmousewheel=f;},
			paste : function(f) {temp.onpaste=f;},
			pause : function(f) {temp.onpause=f;},
			play : function(f) {temp.onplay=f;},
			playing : function(f) {temp.onplaying=f;},
			pointercancel : function(f) {temp.onpointercancel=f;},
			pointerdown : function(f) {temp.onpointerdown=f;},
			pointerenter : function(f) {temp.onpointerenter=f;},
			pointerleave : function(f) {temp.onpointerleave=f;},
			pointermove : function(f) {temp.onpointermove=f;},
			pointerout : function(f) {temp.onpointerout=f;},
			pointerover : function(f) {temp.onpointerover=f;},
			pointerrawupdate : function(f) {temp.onpointerrawupdate=f;},
			pointerup : function(f) {temp.onpointerup=f;},
			progress : function(f) {temp.onprogress=f;},
			ratechange : function(f) {temp.onratechange=f;},
			reset : function(f) {temp.onreset=f;},
			resize : function(f) {temp.onresize=f;},
			scroll : function(f) {temp.onscroll=f;},
			search : function(f) {temp.onsearch=f;},
			securitypolicyviolation : function(f) {temp.onsecuritypolicyviolation=f;},
			seeked : function(f) {temp.onseeked=f;},
			seeking : function(f) {temp.onseeking=f;},
			select : function(f) {temp.onselect=f;},
			selectionchange : function(f) {temp.onselectionchange=f;},
			selectstart : function(f) {temp.onselectstart=f;},
			slotchange : function(f) {temp.onslotchange=f;},
			stalled : function(f) {temp.onstalled=f;},
			submit : function(f) {temp.onsubmit=f;},
			suspend : function(f) {temp.onsuspend=f;},
			timeupdate : function(f) {temp.ontimeupdate=f;},
			toggle : function(f) {temp.ontoggle=f;},
			transitioncancel : function(f) {temp.ontransitioncancel=f;},
			transitionend : function(f) {temp.ontransitionend=f;},
			transitionrun : function(f) {temp.ontransitionrun=f;},
			transitionstart : function(f) {temp.ontransitionstart=f;},
			volumechange : function(f) {temp.onvolumechange=f;},
			waiting : function(f) {temp.onwaiting=f;},
			webkitanimationend : function(f) {temp.onwebkitanimationend=f;},
			webkitanimationiteration : function(f) {temp.onwebkitanimationiteration=f;},
			webkitanimationstart : function(f) {temp.onwebkitanimationstart=f;},
			webkitfullscreenchange : function(f) {temp.onwebkitfullscreenchange=f;},
			webkitfullscreenerror : function(f) {temp.onwebkitfullscreenerror=f;},
			webkittransitionend : function(f) {temp.onwebkittransitionend=f;},
			wheel : function(f) {temp.onwheel=f;},
			ready : function(f) {window.setTimeout(function(){temp.onload=f;},0)},
			get : function() {return name;},
			css : function(name,value) {temp.style.setProperty(name,value)}
		}
	}
}
var $=function(selector) {return new sup.get(selector);}
