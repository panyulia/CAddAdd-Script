var documentElement = document.documentElement;
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
		if (selector == undefined || selector == null || selector == "" || selector == false) {
			this.name=document.getElementsByTagName("");
			var temp=new nameX(selector).name[0];
		} else if (selector == document) {
			this.name=document.body;
			var temp=new nameX(selector).name[0];
		} else if (selector == document.documentElement) {
			this.name=document.documentElement;
			var temp=new nameX(selector).name[0];
		} else if (selector.slice(0,1) == "#") {
			this.name=document.getElementById(selector.slice(1,selector.length));
			var temp=new nameX(selector).name;
		} else if (selector.slice(0,1) == ",") {
			this.name=document.createElement(selector.slice(1,selector.length));
			var temp=new nameX(selector).name[0];
		} else if (selector.slice(0,1) == ".") {
			this.name=document.getElementsByClassName(selector.slice(1,selector.length));
			var temp=new nameX(selector).name[0];
		} else {
			this.name=document.getElementsByTagName(selector);
			var temp=new nameX(selector).name[0];
		}

		this.html=function(text) {
			if (text == undefined || text == null || text == "" || text == false) {
				return temp.innerHTML;
			} else {
				return temp.innerHTML=text;
			}
		}
		this.val=function(text) {
			if (text == undefined || text == null || text == "" || text == false) {
				return temp.value;
			} else {
				return temp.value=text;
			}
		}
		this.animationend=function(f) {temp.onanimationend=f;}
		this.animationiteration=function(f) {temp.onanimationiteration=f;}
		this.animationstart=function(f) {temp.onanimationstart=f;}
		this.auxclick=function(f) {temp.onauxclick=f;}
		this.beforecopy=function(f) {temp.onbeforecopy=f;}
		this.beforecut=function(f) {temp.onbeforecut=f;}
		this.beforepaste=function(f) {temp.onbeforepaste=f;}
		this.beforexrselect=function(f) {temp.onbeforexrselect=f;}
		this.blur=function(f) {temp.onblur=f;}
		this.cancel=function(f) {temp.oncancel=f;}
		this.canplay=function(f) {temp.oncanplay=f;}
		this.canplaythrough=function(f) {temp.oncanplaythrough=f;}
		this.change=function(f) {temp.onchange=f;}
		this.click=function(f) {temp.onclick=f;}
		this.close=function(f) {temp.onclose=f;}
		this.contextlost=function(f) {temp.oncontextlost=f;}
		this.contextmenu=function(f) {temp.oncontextmenu=f;}
		this.contextrestored=function(f) {temp.oncontextrestored=f;}
		this.copy=function(f) {temp.oncopy=f;}
		this.cuechange=function(f) {temp.oncuechange=f;}
		this.cut=function(f) {temp.oncut=f;}
		this.dblclick=function(f) {temp.ondblclick=f;}
		this.drag=function(f) {temp.ondrag=f;}
		this.dragend=function(f) {temp.ondragend=f;}
		this.dragenter=function(f) {temp.ondragenter=f;}
		this.dragleave=function(f) {temp.ondragleave=f;}
		this.dragover=function(f) {temp.ondragover=f;}
		this.dragstart=function(f) {temp.ondragstart=f;}
		this.drop=function(f) {temp.ondrop=f;}
		this.durationchange=function(f) {temp.ondurationchange=f;}
		this.emptied=function(f) {temp.onemptied=f;}
		this.ended=function(f) {temp.onended=f;}
		this.error=function(f) {temp.onerror=f;}
		this.focus=function(f) {temp.onfocus=f;}
		this.formdata=function(f) {temp.onformdata=f;}
		this.fullscreenchange=function(f) {temp.onfullscreenchange=f;}
		this.fullscreenerror=function(f) {temp.onfullscreenerror=f;}
		this.gotpointercapture=function(f) {temp.ongotpointercapture=f;}
		this.input=function(f) {temp.oninput=f;}
		this.invalid=function(f) {temp.oninvalid=f;}
		this.keydown=function(f) {temp.onkeydown=f;}
		this.keypress=function(f) {temp.onkeypress=f;}
		this.keyup=function(f) {temp.onkeyup=f;}
		this.loadeddata=function(f) {temp.onloadeddata=f;}
		this.loadedmetadata=function(f) {temp.onloadedmetadata=f;}
		this.loadstart=function(f) {temp.onloadstart=f;}
		this.lostpointercapture=function(f) {temp.onlostpointercapture=f;}
		this.mousedown=function(f) {temp.onmousedown=f;}
		this.mouseenter=function(f) {temp.onmouseenter=f;}
		this.mouseleave=function(f) {temp.onmouseleave=f;}
		this.mousemove=function(f) {temp.onmousemove=f;}
		this.mouseout=function(f) {temp.onmouseout=f;}
		this.mouseover=function(f) {temp.onmouseover=f;}
		this.mouseup=function(f) {temp.onmouseup=f;}
		this.mousewheel=function(f) {temp.onmousewheel=f;}
		this.paste=function(f) {temp.onpaste=f;}
		this.pause=function(f) {temp.onpause=f;}
		this.play=function(f) {temp.onplay=f;}
		this.playing=function(f) {temp.onplaying=f;}
		this.pointercancel=function(f) {temp.onpointercancel=f;}
		this.pointerdown=function(f) {temp.onpointerdown=f;}
		this.pointerenter=function(f) {temp.onpointerenter=f;}
		this.pointerleave=function(f) {temp.onpointerleave=f;}
		this.pointermove=function(f) {temp.onpointermove=f;}
		this.pointerout=function(f) {temp.onpointerout=f;}
		this.pointerover=function(f) {temp.onpointerover=f;}
		this.pointerrawupdate=function(f) {temp.onpointerrawupdate=f;}
		this.pointerup=function(f) {temp.onpointerup=f;}
		this.progress=function(f) {temp.onprogress=f;}
		this.ratechange=function(f) {temp.onratechange=f;}
		this.reset=function(f) {temp.onreset=f;}
		this.resize=function(f) {temp.onresize=f;}
		this.scroll=function(f) {temp.onscroll=f;}
		this.search=function(f) {temp.onsearch=f;}
		this.securitypolicyviolation=function(f) {temp.onsecuritypolicyviolation=f;}
		this.seeked=function(f) {temp.onseeked=f;}
		this.seeking=function(f) {temp.onseeking=f;}
		this.select=function(f) {temp.onselect=f;}
		this.selectionchange=function(f) {temp.onselectionchange=f;}
		this.selectstart=function(f) {temp.onselectstart=f;}
		this.slotchange=function(f) {temp.onslotchange=f;}
		this.stalled=function(f) {temp.onstalled=f;}
		this.submit=function(f) {temp.onsubmit=f;}
		this.suspend=function(f) {temp.onsuspend=f;}
		this.timeupdate=function(f) {temp.ontimeupdate=f;}
		this.toggle=function(f) {temp.ontoggle=f;}
		this.transitioncancel=function(f) {temp.ontransitioncancel=f;}
		this.transitionend=function(f) {temp.ontransitionend=f;}
		this.transitionrun=function(f) {temp.ontransitionrun=f;}
		this.transitionstart=function(f) {temp.ontransitionstart=f;}
		this.volumechange=function(f) {temp.onvolumechange=f;}
		this.waiting=function(f) {temp.onwaiting=f;}
		this.webkitanimationend=function(f) {temp.onwebkitanimationend=f;}
		this.webkitanimationiteration=function(f) {temp.onwebkitanimationiteration=f;}
		this.webkitanimationstart=function(f) {temp.onwebkitanimationstart=f;}
		this.webkitfullscreenchange=function(f) {temp.onwebkitfullscreenchange=f;}
		this.webkitfullscreenerror=function(f) {temp.onwebkitfullscreenerror=f;}
		this.webkittransitionend=function(f) {temp.onwebkittransitionend=f;}
		this.wheel=function(f) {temp.onwheel=f;}
		this.ready=function(f) {temp.onload=f;}
	}
}
var $=function(selector) {return new sup.get(selector);}
