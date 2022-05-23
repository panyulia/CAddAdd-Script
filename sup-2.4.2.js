"use strict";
/*
https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/8233024559756d04da9ffecd83a92227fc0356beabd400a38904d91d8ee59d7a9286962b5ae43cd7068374ad5abc9bb7?pictype=scale&from=30113&version=3.3.3.3&uin=3223285598&fname=hahahaha.png&size=750
这是一个javascript压缩代码
*/
var github=function(){window.open("https://github.com/panyulia/Javascript");}
var clear=function(){console.clear();}
var log=function(text,date){if (!date) {console.log(text);} else {console.log(text,date);}}
var warn=function(text,date){if (!date) {console.warn(text);} else {console.warn(text,date);}}
var error=function(text,date){if (!date) {console.error(text);} else {console.error(text,date);}}
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
		var name=[];
if ((typeof selector=="function")==true) {
	window.setTimeout(function(){
		window.onload=selector;
		return;
	},0)
} else if (!!selector && (typeof selector=="string")==true) {
		if (!selector) {
			return this;
		} else if (selector == document) {
			name=document.getElementsByTagName("body");
			var temp=new nameX(selector).name;
		} else if (selector.slice(0,1) == "#") {
			name[0]=document.getElementById(selector.slice(1,selector.length));
			var temp=new nameX(selector).name;
		} else if (selector.slice(0,1) == ",") {
			return document.createElement(selector.slice(1,selector.length));
			var temp=new nameX(selector).name[0];
		} else if (selector.slice(0,1) == ".") {
			for (var i=0;i<=document.getElementsByClassName(selector.slice(1,selector.length)).length-1;i++) {
				name.push(document.getElementsByClassName(selector.slice(1,selector.length))[i]);
			}
			var temp=new nameX(selector).name[0];
		} else {
			for (var i=0;i<=document.getElementsByTagName(selector).length-1;i++) {
				name.push(document.getElementsByTagName(selector)[i]);
			}
			var temp=new nameX(selector).name[0];
		}
		for (var i=0;i<name.length;++i) {
			this[i]=name[i];
		}
		sup.fn={
			html : function(text) {
				var sc=""
				for (var i=0;i<name.length;++i) {
					if (!text) {
						sc=name[0].innerHTML;
					} else {
						name[i].innerHTML=text;
						sc=name[0].innerHTML;
					}
				}
				return sc;
			},
			val : function(text) {
				var sc;
				for (var i=0;i<name.length;++i) {
					if (!text) {
						sc=name[0].innerHTML;
					} else {
						name[i].value=text;
						sc=name[0].innerHTML;
					}
				}
				return sc;
			},
			ready : function(f) {for (var i=0;i<name.length;++i) {window.onload=f;}},
			append : function(ae) {for (let i=0;i<name.length;++i) {name[i].appendChild(ae);}},
			pause : function(f) {for (let i=0;i<name.length;++i) {name[i].pause();}},
			play : function(f) {for (let i=0;i<name.length;++i) {name[i].play();}},
			text : function(text) {
				for (var i=0;i<name.length;++i) {
					if (!text) {
						log(i+": "+name[i].innerText);
					} else {
						name[i].innerText=text;
						log(i+": "+name[i].innerText);
					}
				}
			},
			for : function( obj, fl) {
				if (!fl) {
					for (var i=0;i<name.length;++i) {
						obj();
					}
				} else {
					for (var i=0;i<fl;++i) {
						obj();
					}
				}
				return name;
			},
			addEvent : function(names,f) {for (let i=0;i<name.length;++i) {name[i].addEventListener(names,f);}},
			removeEvent : function(names,fname) {for (let i=0;i<name.length;++i) {name[i].removeEventListener(names,fname);}},
			css : function (names,value) {
				if (!!names&&!!value&&names.constructor==String&&value.constructor==String) {
					for (var i=0;i<name.length;++i) {
						name[i].style.setProperty(names,value);
					}
					return Array(names,value);
				} else if (!!names&&!value&&names.constructor==Object) {
					for (var i=0;i<name.length;++i) {
						for (var ii in names) {
							name[i].style.setProperty(ii,names[ii]);
						}
					}
					return names;
				}
			},
			remove : function() {for (let i=0;i<name.length;++i) {name[i].remove()}},
			constructor: function(selector) {this.prototype=sup.fn;},
			version : "2.4.2"
		}
		{const temp=["animationend","animationiteration","animationstart","auxclick","beforecopy","beforecut","beforepaste","beforexrselect","blur","cancel","canplay","canplaythrough","change","click","close","contextlost","contextmenu","contextrestored","copy","cuechange","cut","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","ended","error","focus","formdata","fullscreenchange","fullscreenerror","gotpointercapture","input","invalid","keydown","keypress","keyup","loadeddata","loadedmetadata","loadstart","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","paste","onpause","onplay","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerrawupdate","pointerup","progress","ratechange","reset","resize","scroll","search","securitypolicyviolation","seeked","seeking","select","selectionchange","selectstart","slotchange","stalled","submit","suspend","timeupdate","toggle","transitioncancel","transitionend","transitionrun","transitionstart","volumechange","waiting","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkitfullscreenchange","webkitfullscreenerror","webkittransitionend","wheel"];for (let ii of temp) {sup.fn[ii]=function(f){for (let i=0;i<name.length;++i) {eval('name[i].on'+ii+'=f;')}}}}
		{
			let temp=[];
			for (let i in sup.fn) {
				temp[i]=sup.fn[i];
			}
			sup.fn=temp;
		}
		{
			let temp=[];
			for (let i in sup) {
				temp[i]=sup[i];
			}
			sup=temp;
		}
		name.__proto__=sup.fn;
		return name;
} else if (!!selector) {
	name=[selector];
	name.__proto__=sup.fn;
	return name;
} else {
	this.__proto__=sup.fn;
	return this;
}
	},
	for : function( obj, fl ) {
		/*
		for the of => Array is []
		for the in => Object is {}
		*/
		if (!!obj&&!!fl&&obj.constructor==Function&&fl.constructor==Number) {
			for (let i=0;i<fl;++i) {
				obj();
			}
			return obj;
		} else if (obj.constructor==Array&&!fl&&!!obj) {
			let temp="";
			for (let i of obj) {
				temp=temp+i+" ";
			}
			return temp.slice(0,temp.length-1);
		} else if (obj.constructor==String&&!fl&&!!obj) {
			let temp=[];
			let ti=0;
			for (let i=0;i<=obj.length;++i) {
				if (obj.slice(i,i+1)==" ") {
					++ti;
					temp[ti]=temp[ti]+obj.slice(i+1,i+1);
				} else {
					temp[ti]=temp[ti]+obj.slice(i,i+1);
				}
			}
			ti=0;
			for (let i of temp) {
				temp[ti]=i.slice(9,i.length);
				++ti;
			}
			return temp;
		}
	},
	ajax : function(options) {
		let xhr=new createXHR();
		if ((typeof options == 'object') == true) {
			/*if (options.url) {o.url=options.url;} else {o.url="";}
			if (options.type) {o.type=options.type;} else {o.type="GET";}
			if (options.async) {o.async=options.async;} else {o.async=true;}
			if (options.username) {o.username=options.username}
			if (options.password) {o.password=options.password}*/
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
	net : function(options) {
		if (options.constructor==Object) {if (!!options.type&&!!options.url) {
			let ys=function(name,o){let yss=new sup.get(","+name);for (let i in o) {yss[i]=o[i]};document.getElementsByTagName('head')[0].appendChild(yss);}
			switch (options.type) {
				case "png":ys("img",{src:options.url,onerror:function(){options.Error(options);$("#XHR").remove();},id:"XHR",onload:function(){$("#XHR").remove();}});break
				case "js":sup.ajax({url:options.url,xhr:function(e){e.onreadystatechange=function(){if (e.readyState==4&&e.status==0) {options.Error(options);}}}});break
			}
		}}
		return options;
	},
	addEvent : function(name,f) {window.addEventListener(name,f);},
	removeEvent : function(name,fname) {window.removeEventListener(name,fname);}
}
var $=function(selector) {return new sup.get(selector);}
$.for=function(obj,fl) {return sup.for(obj,fl);}
$.ajax=function(options) {return sup.ajax(options);}
$.net=function(options) {return sup.net(options);}
$.addEvent=function(name,f) {return new sup.addEvent(name,f);}
$.removeEvent=function(name,fname) {return new sup.removeEvent(name,fname);}
log(`%c
#################    ####	   ####    ################
#################    ####	   ####    ################
####			     ####	   ####    ####        ####
####			     ####	   ####    ####        ####    `+new sup.get("html").version+`
#################    ####	   ####    ################
#################    ####	   ####    ################
			 ####    ####	   ####    ####
			 ####    ####	   ####    ####
#################    ##############    ####
#################    ##############    ####
	`,"color:red");
