"use strict";
var github=function(){window.open("https://github.com/panyulia/Javascript");}
var clear=console.clear;
var log=console.log;
var error=console.error;
var warn=console.warn;
var sleep=window.setTimeout;
var Sleep=window.clearTimeout;
var interval=window.setInterval;
var Interval=window.clearInterval;
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
	temp:{},
	fn:[],
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
	removeEvent : function(name,fname) {window.removeEventListener(name,fname);}
}
sup.write=sup.fn.write=function(obj){
if(!!obj&&obj.constructor==Object){
	for(let i in obj){
		this[i]=obj[i];
	}
	return this;
}
return {};
};
sup.fn.write({
	html : function(text) {
		var sc="";
		for (var i=0;i<this.length;++i) {
			if (ifair(text)==false) {
				sc=this[0].innerHTML;
			} else {
				this[i].innerHTML=text;
				sc=this[0].innerHTML;
			}
		}
		return sc;
	},
	val : function(text) {
		var sc="";
		for (var i=0;i<this.length;++i) {
			if (ifair(text)==false) {
				sc=this[0].value;
			} else {
				this[i].value=text;
				sc=this[0].value;
			}
		}
		return sc;
	},
	ready : function(f) {for (var i=0;i<this.length;++i) {f();}},
	append : function(ae) {for (let i=0;i<this.length;++i) {this[i].appendChild(ae);}},
	pause : function(f) {for (let i=0;i<this.length;++i) {this[i].pause();}},
	play : function(f) {for (let i=0;i<this.length;++i) {this[i].play();}},
	onplay : function(f) {for (let i=0;i<this.length;++i) {this[i].onplay=f;}},
	onpause : function(f) {for (let i=0;i<this.length;++i) {this[i].onpause=f;}},
	onblur : function(f) {for (let i=0;i<this.length;++i) {this[i].onblur=f;}},
	blur : function(eh) {for (let i=0;i<this.length;++i) {this[i].blur(eh);}},
	onfocus : function(f) {for (let i=0;i<this.length;++i) {this[i].onfocus=f;}},
	focus : function(eh) {for (let i=0;i<this.length;++i) {this[i].focus(eh);}},
	text : function(text) {
		var sc="";
		for (var i=0;i<this.length;++i) {
			if (ifair(text)==false) {
				sc=this[0].innerText;
			} else {
				this[i].innerText=text;
				sc=this[0].innerText;
			}
		}
		return sc;
	},
	for : function( obj, fl) {
		if (!fl) {
			for (var i=0;i<this.length;++i) {
				obj();
			}
		} else {
			for (var i=0;i<fl;++i) {
				obj();
			}
		}
		return this;
	},
	addEvent : function(names,f) {for (let i=0;i<this.length;++i) {this[i].addEventListener(names,f);}},
	removeEvent : function(names,fname) {for (let i=0;i<this.length;++i) {this[i].removeEventListener(names,fname);}},
	css : function (names,value) {
		if (!!names&&!!value&&names.constructor==String&&value.constructor==String) {
			for (var i=0;i<this.length;++i) {
				this[i].style.setProperty(names,value);
			}
			return Array(names,value);
		} else if (!!names&&!value&&names.constructor==Object) {
			for (var i=0;i<this.length;++i) {
				for (var ii in names) {
					this[i].style.setProperty(ii,names[ii]);
				}
			}
			return this;
		}
	},
	attr : function(names,value) {
		if(ifair(names)==true&&ifair(value)==false&&(typeof names=='string')==true){
			return this[0].getAttribute(names);
		}else if(ifair(names)&&ifair(value)&&(typeof names=='string')==true){
			for(let i=0;i<this.length;++i){
				this[i].setAttribute(names,value);
			}
			return this;
		}else if(ifair(names)&&(typeof names=='object')==true){
			for(let i=0;i<this.length;++i){
				for(let ii in names){
					this[i].setAttribute(ii,names[ii]);
				}
			}
			return this;
		}
	},
	rmAttr:function(names) {
		if(ifair(names)&&(typeof names=='string')==true){
			for(let i=0;i<this.length;++i){
				this[i].removeAttribute(names);
			}
			return this;
		}
	},
	remove : function() {for (let i=0;i<this.length;++i) {this[i].remove()}},
	parent : function(selector) {
		let r=$();
		for(let i=0;i<this.length;++i){
			this[i].parentNode!=document&&this[i].parentNode!=null&&this[i].parentNode!=undefined?r.push(this[i].parentNode):undefined;
		}
		r.sort();r.reverse();
		for(let i=0;i<r.length;++i){
			r[i]==r[i+1]?r.splice(i+1,i+1):undefined;
		}
		return r;
	},
	gets : function() {
		let r=[];
		for(let i=0;i<this.length;++i){r[i]=this[i];};
		return r;
	},
	children : function() {
		let r=$();
		for(let i=0;i<this.length;++i){
			for(let ii of this[i].children){r.push(ii);}
		}
		r.sort();r.reverse();
		return r;
	},
	version : "2.4.12"
});
sup.fn.get=function(selector) {
	this.__proto__=[];
	this.__proto__=sup.fn;
	sup.temp.dg=undefined;
	if ((typeof selector=="function")==true) {
		window.setTimeout(function(){
			window.onload=selector;
			sup.temp.dg='fun';
		},0)
	} else if (!!selector && (typeof selector=="string")==true) {
		if (!selector) {
			return this;
		} else if (selector[0] == "#") {
			this.push(document.getElementById(selector.slice(1,selector.length)));
			sup.temp.dg='Id';
		} else if (selector[0] == ",") {
			sup.temp.dg='cE';
			return document.createElement(selector.slice(1,selector.length));
		} else if (selector[0] == ".") {
			for (var i=0;i<=document.getElementsByClassName(selector.slice(1,selector.length)).length-1;i++) {
				this.push(document.getElementsByClassName(selector.slice(1,selector.length))[i]);
			}
			sup.temp.dg='ClassName';
		} else {
			for (var i=0;i<=document.getElementsByTagName(selector).length-1;i++) {
				this.push(document.getElementsByTagName(selector)[i]);
			}
			sup.temp.dg='TagName';
		}
		for (var i=0;i<this.length;++i) {
			this[i]=this[i];
		}
		{const temp=["animationend","animationiteration","animationstart","auxclick","beforecopy","beforecut","beforepaste","beforexrselect","cancel","canplay","canplaythrough","change","click","close","contextlost","contextmenu","contextrestored","copy","cuechange","cut","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","ended","error","formdata","fullscreenchange","fullscreenerror","gotpointercapture","input","invalid","keydown","keypress","keyup","loadeddata","loadedmetadata","loadstart","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","paste","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerrawupdate","pointerup","progress","ratechange","reset","resize","scroll","search","securitypolicyviolation","seeked","seeking","select","selectionchange","selectstart","slotchange","stalled","submit","suspend","timeupdate","toggle","transitioncancel","transitionend","transitionrun","transitionstart","volumechange","waiting","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkitfullscreenchange","webkitfullscreenerror","webkittransitionend","wheel"];for (let ii of temp) {sup.fn[ii]=function(f){for (let i=0;i<this.length;++i) {eval('this[i].on'+ii+'=f;')}}}}
		{for(let i in sup.fn){this.__proto__[i]=sup.fn[i]}}
		return this;
	} else if (!!selector) {
		if(selector.constructor==Array||selector.__proto__.__proto__.constructor==Object){for(let i of values(selector)){this.push(i);}}else{this.push(selector);}
		sup.temp.dg='A';
		return this;
	} else {
		return this;
	}
}
var $=function(selector) {return new sup.fn.get(selector);}
$.for=function(obj,fl) {return sup.for(obj,fl);}
$.ajax=function(options) {return sup.ajax(options);}
$.addEvent=function(name,f) {return new sup.addEvent(name,f);}
$.removeEvent=function(name,fname) {return new sup.removeEvent(name,fname);}
var ape=function(name,move,o){
	if ((typeof name=='string')==true) {
		let yss=document.createElement(name);
		for (let i in o) {yss[i]=o[i]};
		$(move).append(yss);
		return yss;
	} else if ((typeof name=='object')==true) {
		for (let i in name) {for (let ii in name[i]) {
			var yss=document.createElement(i);
			for (let a in eval(`name[i].type`)) {yss[a]=eval(`name[i].type.${a}`);};
		};$(name[i].url).append(yss);}
	}
}
