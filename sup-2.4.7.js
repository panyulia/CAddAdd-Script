"use strict";
let ls=function(){
	sup.log={};
	sup.logs=function(){};
	sup.logs.prototype=[];
	sup.logs.prototype.constructor=function(){};
	sup.log.__proto__=sup.logs.prototype;
	sup.log.push();
}
var github=function(){window.open("https://github.com/panyulia/Javascript");}
var clear=console.clear;
var log=console.log;
var error=console.error;
var warn=console.warn;
var ifair=function(i){if(i==undefined||i==null){return false;}else{return true;}}
function createXHR () {
    var XHR = [
        function () { return new XMLHttpRequest () },
        function () { return new ActiveXObject ("Msxml2.XMLHTTP") },
        function () { return new ActiveXObject ("Msxml3.XMLHTTP") },
        function () { return new ActiveXObject ("Microsoft.XMLHTTP") }
    ];
    var xhr = null;
    for (var i = 0; i < XHR.length; i ++) {
        try {
            xhr = XHR[i]();
        } catch(e) {
            continue
        }
        break;
    }
    return xhr;
}


var nameX=function(selector) {
	this.name=[];
	if (selector == undefined || selector == null || selector == "" || selector == false) {} else if (selector == document) {
		this.name=document.getElementsByTagName("body");
	} else if (selector[0] == "#") {
		this.name=document.getElementById(selector.slice(1,selector.length));
	} else if (selector[0] == ",") {
		this.name=document.createElement(selector.slice(1,selector.length));
	} else if (selector[0] == ".") {
		this.name=document.getElementsByClassName(selector.slice(1,selector.length));
	} else {
		this.name=document.getElementsByTagName(selector);
	}
}
var sup={
	fn:{},
	for : function( obj, fl ) {
		/*
		for the of => Array is []
		for the in => Object is {}
		*/
		try{
		if (!!obj&&!!fl&&obj.constructor==Function&&fl.constructor==Number) {
			for (let i=0;i<fl;++i) {
				obj();
			}
			return obj;
		} else if (obj.constructor==Array||obj.__proto__.__proto__.constructor==Array&&fl.constructor==Function&&!!obj&&!!fl) {
			for (let i of obj) {
				fl(i);
			}
		} else if (obj.constructor==Object||obj.__proto__.__proto__.constructor==Object&&fl.constructor==Function&&!!obj&&!!fl) {
			for (let i in obj) {
				fl(i);
			}
		} else {return obj;}
		}
		catch(err){
		if (!!obj&&!!fl&&obj.constructor==Function&&fl.constructor==Number) {
			for (let i=0;i<fl;++i) {
				obj();
			}
			return obj;
		} else if (obj.constructor==Array&&fl.constructor==Function&&!!obj&&!!fl) {
			for (let i of obj) {
				fl(i);
			}
		} else if (obj.constructor==Object&&fl.constructor==Function&&!!obj&&!!fl) {
			for (let i in obj) {
				fl(i);
			}
		} else {return obj;}
		}
	},
	ajax : function(options) {
		let xhr=new createXHR();
		if ((typeof options == 'object') == true) {
			if (options.type) {
				if (options.url) {
					if (options.async) {
						if (options.username) {
							if (options.password) {
								xhr.open(options.type,options.url,options.async,options.username,options.password);
							}
						} else {
							xhr.open(options.type,options.url,options.async);
						}
					} else {
						xhr.open(options.type,options.url,true);
					}
				}
			} else if (options.url) {
				xhr.open("GET",options.url,true);
			}
			if (!!options.setRH&&options.constructor==Object) {
				for (let i in options.setRH) {
					xhr.setRequestHeader(i,options.setRH[i]);
				}
			}
			if ((typeof options.xhr == 'function') == true) {
				let newAjax={
					readystatechange : function(f) {xhr.onreadystatechange=f;}
				};
				for (let i in newAjax) {
					xhr[i]=newAjax[i];
				}
				options.xhr(xhr);
				if (options.type=="GET"||options.type=="get") {xhr.send(null);} else {xhr.send(options.type);}
				return options;
			}
		}
		if (options.type=="GET"||options.type=="get") {xhr.send(null);} else {xhr.send(options.type);}
		return options;
	},
	addEvent : function(name,f) {window.addEventListener(name,f);},
	removeEvent : function(name,fname) {window.removeEventListener(name,fname);},
	fn:{
		html : function(text) {
			var sc="";
			for (var i=0;i<sup.log.length;++i) {
				if (!text) {
					sc=sup.log[0].innerHTML;
				} else {
					sup.log[i].innerHTML=text;
					sc=sup.log[0].innerHTML;
				}
			}
			return sc;
		},
		val : function(text) {
			var sc="";
			for (var i=0;i<sup.log.length;++i) {
				if (!text) {
					sc=sup.log[0].value;
				} else {
					sup.log[i].value=text;
					sc=sup.log[0].value;
				}
			}
			return sc;
		},
		ready : function(f) {for (var i=0;i<sup.log.length;++i) {f();}},
		append : function(ae) {for (let i=0;i<sup.log.length;++i) {sup.log[i].appendChild(ae);}},
		pause : function(f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].pause();}},
		play : function(f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].play();}},
		onplay : function(f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].onplay=f;}},
		onpause : function(f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].onpause=f;}},
		onblur : function(f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].onblur=f;}},
		blur : function(eh) {for (let i=0;i<sup.log.length;++i) {sup.log[i].blur(eh);}},
		onfocus : function(f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].onfocus=f;}},
		focus : function(eh) {for (let i=0;i<sup.log.length;++i) {sup.log[i].focus(eh);}},
		text : function(text) {
			var sc="";
			for (var i=0;i<sup.log.length;++i) {
				if (!text) {
					sc=sup.log[0].innerText;
				} else {
					sup.log[i].innerText=text;
					sc=sup.log[0].innerText;
				}
			}
			return sc;
		},
		for : function( obj, fl) {
			if (!fl) {
				for (var i=0;i<sup.log.length;++i) {
					obj();
				}
			} else {
				for (var i=0;i<fl;++i) {
					obj();
				}
			}
			return sup.log;
			ls();
		},
		addEvent : function(names,f) {for (let i=0;i<sup.log.length;++i) {sup.log[i].addEventListener(names,f);}},
		removeEvent : function(names,fname) {for (let i=0;i<sup.log.length;++i) {sup.log[i].removeEventListener(names,fname);}},
		css : function (names,value) {
			if (!!names&&!!value&&names.constructor==String&&value.constructor==String) {
				for (var i=0;i<sup.log.length;++i) {
					sup.log[i].style.setProperty(names,value);
				}
				return Array(names,value);
			} else if (!!names&&!value&&names.constructor==Object) {
				for (var i=0;i<sup.log.length;++i) {
					for (var ii in names) {
						sup.log[i].style.setProperty(ii,names[ii]);
					}
				}
				return sup.log;
			}
		},
		attr : function(names,value) {
			if(ifair(names)==true&&ifair(value)==false&&(typeof names=='string')==true){
				return sup.log[0].getAttribute(names);
			}else if(ifair(names)&&ifair(value)&&(typeof names=='string')==true){
				for(let i=0;i<sup.log.length;++i){
					sup.log[i].setAttribute(names,value);
				}
				return sup.log;
			}else if(ifair(names)&&(typeof names=='object')==true){
				for(let i=0;i<sup.log.length;++i){
					for(let ii in names){
						sup.log[i].setAttribute(ii,names[ii]);
					}
				}
				return sup.log;
			}
		},
		remove : function() {for (let i=0;i<sup.log.length;++i) {sup.log[i].remove()}},
		version : "2.4.6"
	}
}
sup.fn.get=function(selector) {
	if ((typeof selector=="function")==true) {
		window.setTimeout(function(){
			window.onload=selector;
		},0)
	} else if (!!selector && (typeof selector=="string")==true) {
		ls();
		if (!selector) {
			return this;
		} else if (selector[0] == "#") {
			sup.log.push(document.getElementById(selector.slice(1,selector.length)));
		} else if (selector[0] == ",") {
			return document.createElement(selector.slice(1,selector.length));
		} else if (selector[0] == ".") {
			ls();
			for (var i=0;i<=document.getElementsByClassName(selector.slice(1,selector.length)).length-1;i++) {
				sup.log.push(document.getElementsByClassName(selector.slice(1,selector.length))[i]);
			}
		} else {
			ls();
			for (var i=0;i<=document.getElementsByTagName(selector).length-1;i++) {
				sup.log.push(document.getElementsByTagName(selector)[i]);
			}
		}
		for (var i=0;i<sup.log.length;++i) {
			this[i]=sup.log[i];
		}
		{const temp=["animationend","animationiteration","animationstart","auxclick","beforecopy","beforecut","beforepaste","beforexrselect","cancel","canplay","canplaythrough","change","click","close","contextlost","contextmenu","contextrestored","copy","cuechange","cut","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","ended","error","formdata","fullscreenchange","fullscreenerror","gotpointercapture","input","invalid","keydown","keypress","keyup","loadeddata","loadedmetadata","loadstart","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","paste","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerrawupdate","pointerup","progress","ratechange","reset","resize","scroll","search","securitypolicyviolation","seeked","seeking","select","selectionchange","selectstart","slotchange","stalled","submit","suspend","timeupdate","toggle","transitioncancel","transitionend","transitionrun","transitionstart","volumechange","waiting","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkitfullscreenchange","webkitfullscreenerror","webkittransitionend","wheel"];for (let ii of temp) {sup.fn[ii]=function(f){for (let i=0;i<sup.log.length;++i) {eval('sup.log[i].on'+ii+'=f;')}}}}
		{for(let i in sup.fn){sup.log.__proto__[i]=sup.fn[i]}}
		return sup.log;
	} else if (!!selector) {
		ls();
		if(selector.constructor==Array||selector.__proto__.__proto__.constructor==Object){for(let i of values(selector)){sup.log.push(i);}}else{sup.log.push(selector);}
		{for(let i in sup.fn){sup.log.__proto__[i]=sup.fn[i]}}
		return sup.log;
	} else {
		ls();
		{for(let i in sup.fn){sup.log.__proto__[i]=sup.fn[i]}}
		return sup.log;
	}
}
sup.fn.write=function(obj){
if(!!obj&&obj.constructor==Object){
	for(let i in obj){
		sup.fn[i]=obj[i];
	}
	return sup.fn;
}
return sup.fn;
};
sup.write=function(obj){
if(!!obj&&obj.constructor==Object){
	for(let i in obj){
		sup[i]=obj[i];
	}
	return sup;
}
return sup;
}
var $=function(selector) {return new sup.fn.get(selector);}
$.for=function(obj,fl) {return sup.for(obj,fl);}
$.ajax=function(options) {return sup.ajax(options);}
$.addEvent=function(name,f) {return new sup.addEvent(name,f);}
$.removeEvent=function(name,fname) {return new sup.removeEvent(name,fname);}
var ape=function(name,move,o){let yss=document.createElement(name);for (let i in o) {yss[i]=o[i]};document.getElementsByTagName(move)[0].appendChild(yss);}
log(`%c
#################    ####	   ####    ################
#################    ####	   ####    ################
####			     ####	   ####    ####        ####
####			     ####	   ####    ####        ####    %c SUP %c ${new sup.fn.get("html").version} %c
#################    ####	   ####    ################
#################    ####	   ####    ################
			 ####    ####	   ####    ####
			 ####    ####	   ####    ####
#################    ##############    ####
#################    ##############    ####
`,
"color:red",
"color:white;background-color:#3a3;border-radius:100px 0 0 100px",
"color:white;background-color:red;border-radius:0 100px 100px 0",
"color:red"
);
