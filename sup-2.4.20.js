var github=function(){window.open("https://github.com/panyulia/Javascript");}
var clear=console.clear;
var log=console.log;
var error=console.error;
var addEvent=window.addEventListener;
var rmEvent=window.removeEventListener;
var values=Object.values;
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
	for : function( obj, fun ) {
		/*
		for the of => Array is []
		for the in => Object is {}
		*/
		try{
			if(obj.__proto__.constructor==Number){
				for(let i=0;i<=obj;++i){
					fun.call(obj,i);
				}
			}else{
				for(let i in obj){
					fun.call(obj,i);
				}
			}
			return obj;
		}
		catch(err){
			if(obj.__proto__.constructor==Array){
				for(let i=0;i<obj.length;++i){
					fun.call(obj,i);
				}
			}else{
				for(let i=0;i<=obj.length;++i){
					fun.call(obj,i);
				}
			}
			return obj;
		}
	},
	moveOffset : function(element, options) {
		let posi=window.getComputedStyle(element).position,
		thisElement=function(IS){
			let temp=[IS];
			return new sup.fn.getElements(temp);
		},mvPosi,mvT,mvL,props={};
		if(posi === "static"){
			element.style.position="relative";
		}
		let thisOffset=thisElement(element).offset(),
		top=window.getComputedStyle(element).top,
		left=window.getComputedStyle(element).left;
		let eee = ( posi === "absolute" || posi === "fixed" ) && ( top + left ).indexOf( "auto" ) > -1;
		if(eee){
			mvPosi=thisElement.posi();
			mvT=mvPosi.top;
			mvL=mvPosi.left;
		}else{
			mvT=parseFloat(top) || 0;
			mvL=parseFloat(left) || 0;
		}
		if(options.top != null){
			props.top=(options.top-thisOffset.top)+mvT;
		}
		if(options.left != null){
			props.left=(options.left-thisOffset.left)+mvL;
		}
		if("using" in options){
			options.using.call(element,props);
		}else{
			thisElement(element).css(props);
		}
	}
}
sup.write=function(obj){
if(!!obj&&obj.constructor==Object){
	for(let i in obj){
		this[i]=obj[i];
	}
	return this;
}
return {};
};
sup.fn.write=sup.write;
sup.readyTF=false;
window.addEventListener("DOMContentLoaded",function(){sup.readyTF=true},false);
sup.fn.write({
	posi : function() {
		let is=this;
		if ( !this[ 0 ] ) {
			return;
		}
		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };
		if ( window.getComputedStyle(elem).position === "fixed" ) {
			offset = elem.getBoundingClientRect();
		} else {
			let tm=function(elem){
				let a=[elem];
				return new sup.fn.getElements(a);
			}
			var a=function(string){
				return Number(string.slice(0,string.length-2));
			}
			offset = this.offset();
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				window.getComputedStyle(offsetParent).position === "static" ) {
				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {
				parentOffset = tm( offsetParent ).offset();
				parentOffset.top += a(window.getComputedStyle(offsetParent).borderTopWidth);
				parentOffset.left += a(window.getComputedStyle(offsetParent).borderLeftWidth);
			}
		}
		//
		return {
			top: offset.top - parentOffset.top - a(window.getComputedStyle(elem).marginTop),
			left: offset.left - parentOffset.left - a(window.getComputedStyle(elem).marginLeft)
		};
	},
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
	ready : function(waitF) {
		let is=this;
		if(sup.readyTF){
			for(let i=0;i<this.length;++i){
				waitF();
			}
		}else{
			window.setTimeout(function(){is.ready(waitF);},0);
		}
	},
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
	for : function( obj, fun) {
		let is=this;
		if (!fun) {
			for (var i=0;i<this.length;++i) {
				obj.call(is,i);
			}
		} else {
			for (var i=0;i<fun;++i) {
				obj.call(is,i);
			}
		}
		return this;
	},
	addEvent : function(names,f) {for (let i=0;i<this.length;++i) {this[i].addEventListener(names,f);}},
	removeEvent : function(names,fname) {for (let i=0;i<this.length;++i) {this[i].removeEventListener(names,fname);}},
	css : function (names,value) {
		let is=this;
		if (!!names&&!!value&&names.constructor==String&&value.constructor==String) {
			for (var i=0;i<this.length;++i) {
				this[i].style.setProperty(names,value);
			}
			return Array(names,value);
		} else if (!!names&&!value&&names.constructor==Object) {
			for (var i=0;i<this.length;++i) {
				for (var ii in names) {
					//is ing"PX" text
					if(!!Number(names[ii])){
						names[ii]+="px";
					}

					this[i].style.setProperty(ii,names[ii]);
				}
			}
			return this;
		} else if (typeof names=="string"&&value==undefined) {
			return window.getComputedStyle(is[0])[names];
		} else {
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
	get : function() {
		let r=[];
		for(let i=0;i<this.length;++i){r[i]=this[i];};
		return r;
	},
	child : function() {
		let r=$();
		for(let i=0;i<this.length;++i){
			for(let ii of this[i].children){r.push(ii);}
		}
		r.sort();r.reverse();
		return r;
	},
	replace : function(obj) {
		try {
		if(ifair(obj)&&(typeof obj=='object')==true&&obj.constructor==Object){
			for(let i=0;i<this.length;++i){
				for(let ii in obj){
					this[i].innerHTML=this[i].innerHTML.replace(RegExp(`{{(.*)${ii}(.*)}}`,"g"),obj[ii])
				}
			}
			return true;
		}else{return {}}
		}
		catch (err) {error(err.message);return false}
	},
	constructor : Object,
	hover : function(over,leave) {
		for(let i=0;i<this.length;++i){
			this[i].onpointerover=over;
			this[i].onpointerleave=leave;
		}
	},
	active : function(down,up) {
		for(let i=0;i<this.length;++i){
			this[i].onpointerdown=down;
			this[i].onpointerup=up;
		}
	},
	offset : function(options){
		let is=this;
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.for(function(e){
					sup.moveOffset(is[e],options);
				});
		}
		var rect, win,
			elem = this[ 0 ];
		if ( !elem ) {
			return;
		}
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},
	version : "2.4.13"
});
sup.fn.getElements=function(selector,filters,or) {
	try {
		this.__proto__=[];
		this.__proto__=sup.fn;
	}
	catch (error) {
		return new sup.fn.getElements(selector);
	}
	sup.temp.dg=undefined;
	if ((typeof selector=="function")==true) {
		window.setTimeout(function(){
			new sup.fn.getElements("html").ready(selector);
			sup.temp.dg='fun';
		},0)
	} else if (!!selector && (typeof selector=="string")==true) {
		// if selector, push is this...
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
		{
			let bds=/(.*)on(.*)/;
			let temp=new Array();
			for (let i in this[0]) {
				if(!!bds.exec(i)){
					if(!bds.exec(i)[1]){
						i!="onpause"&&i!="onplay"&&i!="onfocus"&&i!="onblur"?temp.push(i):undefined;
					}else if(bds.exec(i)[1].search("onc")!=-1){
						temp.push(i);
					}else if(bds.exec(i)[1].search("on")==0){
						temp.push(i);
					}
				}
			}
			for (let i=0;i<temp.length;++i) {
				temp[i]=temp[i].slice(2);
			}
			for (let ii of temp) {
				sup.fn[ii]=function(f){
					for (let i=0;i<this.length;++i) {
						eval('this[i].on'+ii+'=f;')
					}
				}
			}
		}
		{
			for(let i in sup.fn){
				this.__proto__[i]=sup.fn[i]
			}
		}
		// is if filters Object
		if(!!filters){if(filters.__proto__.constructor==Object){
			let is=this;
			let temp=new sup.fn.getElements(selector);
			is.splice(0,is.length);
			for(let i=0;i<temp.length;++i){
				for(let f in filters){
					if(temp[i].getAttribute(f)==filters[f]){
						is.push(temp[i]);
						is.sort();
						for(let i=0;i<is.length;++i){
							is[i]===is[i+1]?is.splice(i+1,i+2):undefined;
						}
					}
				}
			}
		}else if(typeof filters=='string'){
			let is=this;
			let This=new sup.fn.getElements(selector);
			let fi=new sup.fn.getElements(filters);
			let e=0;
			sup.for(Object.assign([],fi),function(i){
				sup.for(Object.assign([],This),function(ii){
					if(This[ii]==fi[i]){
						is.splice(ii-e,1);
					}
				});
				e++;
			});
		}}
		// return is end
		return this;
	} else if (!!selector&&(typeof selector)!="string") {
		if(selector==document){
			this.push(document);
			return this;
		}
		for(let i of values(selector)){
			this.push(i);
		}
		sup.temp.dg='Array';
		return this;
	} else {
		return this;
	}
}
let SUP=sup;
sup=function(selector,filters){return new sup.fn.getElements(selector,filters)};
for(let i in SUP){
	sup[i]=SUP[i];
}
SUP=undefined;
var $=function(selector,filters,or) {return new sup.fn.getElements(selector,filters,or);}
$.for=function(obj,fl) {return sup.for(obj,fl);}
$.ajax=function(options) {return sup.ajax(options);}
$.addEvent=window.addEventListener;
$.removeEvent=window.removeEventListener;