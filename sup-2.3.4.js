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
var xhr = createXHR();


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
		this.arr=[];
		te=this;
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
			this.name[0]=document.getElementById(selector.slice(1,selector.length));
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
		for (var i=0;i<this.name.length;++i) {
			this[i]=this.name[i];
			this.arr[i]=this.name[i];
		}
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
			animationend : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onanimationend=f;}},
			animationiteration : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onanimationiteration=f;}},
			animationstart : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onanimationstart=f;}},
			auxclick : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onauxclick=f;}},
			beforecopy : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onbeforecopy=f;}},
			beforecut : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onbeforecut=f;}},
			beforepaste : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onbeforepaste=f;}},
			beforexrselect : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onbeforexrselect=f;}},
			blur : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onblur=f;}},
			cancel : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncancel=f;}},
			canplay : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncanplay=f;}},
			canplaythrough : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncanplaythrough=f;}},
			change : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onchange=f;}},
			click : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onclick=f;}},
			close : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onclose=f;}},
			contextlost : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncontextlost=f;}},
			contextmenu : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncontextmenu=f;}},
			contextrestored : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncontextrestored=f;}},
			copy : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncopy=f;}},
			cuechange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncuechange=f;}},
			cut : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oncut=f;}},
			dblclick : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondblclick=f;}},
			drag : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondrag=f;}},
			dragend : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondragend=f;}},
			dragenter : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondragenter=f;}},
			dragleave : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondragleave=f;}},
			dragover : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondragover=f;}},
			dragstart : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondragstart=f;}},
			drop : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondrop=f;}},
			durationchange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ondurationchange=f;}},
			emptied : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onemptied=f;}},
			ended : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onended=f;}},
			error : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onerror=f;}},
			focus : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onfocus=f;}},
			formdata : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onformdata=f;}},
			fullscreenchange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onfullscreenchange=f;}},
			fullscreenerror : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onfullscreenerror=f;}},
			gotpointercapture : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ongotpointercapture=f;}},
			input : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oninput=f;}},
			invalid : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].oninvalid=f;}},
			keydown : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onkeydown=f;}},
			keypress : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onkeypress=f;}},
			keyup : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onkeyup=f;}},
			loadeddata : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onloadeddata=f;}},
			loadedmetadata : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onloadedmetadata=f;}},
			loadstart : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onloadstart=f;}},
			lostpointercapture : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onlostpointercapture=f;}},
			mousedown : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmousedown=f;}},
			mouseenter : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmouseenter=f;}},
			mouseleave : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmouseleave=f;}},
			mousemove : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmousemove=f;}},
			mouseout : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmouseout=f;}},
			mouseover : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmouseover=f;}},
			mouseup : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmouseup=f;}},
			mousewheel : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onmousewheel=f;}},
			paste : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpaste=f;}},
			pause : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpause=f;}},
			play : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onplay=f;}},
			playing : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onplaying=f;}},
			pointercancel : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointercancel=f;}},
			pointerdown : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerdown=f;}},
			pointerenter : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerenter=f;}},
			pointerleave : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerleave=f;}},
			pointermove : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointermove=f;}},
			pointerout : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerout=f;}},
			pointerover : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerover=f;}},
			pointerrawupdate : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerrawupdate=f;}},
			pointerup : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onpointerup=f;}},
			progress : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onprogress=f;}},
			ratechange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onratechange=f;}},
			reset : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onreset=f;}},
			resize : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onresize=f;}},
			scroll : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onscroll=f;}},
			search : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onsearch=f;}},
			securitypolicyviolation : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onsecuritypolicyviolation=f;}},
			seeked : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onseeked=f;}},
			seeking : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onseeking=f;}},
			select : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onselect=f;}},
			selectionchange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onselectionchange=f;}},
			selectstart : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onselectstart=f;}},
			slotchange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onslotchange=f;}},
			stalled : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onstalled=f;}},
			submit : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onsubmit=f;}},
			suspend : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onsuspend=f;}},
			timeupdate : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ontimeupdate=f;}},
			toggle : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ontoggle=f;}},
			transitioncancel : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ontransitioncancel=f;}},
			transitionend : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ontransitionend=f;}},
			transitionrun : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ontransitionrun=f;}},
			transitionstart : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].ontransitionstart=f;}},
			volumechange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onvolumechange=f;}},
			waiting : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwaiting=f;}},
			webkitanimationend : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwebkitanimationend=f;}},
			webkitanimationiteration : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwebkitanimationiteration=f;}},
			webkitanimationstart : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwebkitanimationstart=f;}},
			webkitfullscreenchange : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwebkitfullscreenchange=f;}},
			webkitfullscreenerror : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwebkitfullscreenerror=f;}},
			webkittransitionend : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwebkittransitionend=f;}},
			wheel : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onwheel=f;}},
			ready : function(f) {for (var i=0;i<te.name.length;++i) {te.name[i].onload=f;te.name[i].onload()}},
			get : function() {return te.name;},
			css : function(name,value) {for (var i=0;i<te.name.length;++i) {te.name[i].style.setProperty(name,value)}},
			each : function( obj, fl ) {
				var i=0;
				if (!fl) {
					for (;i<te.arr.length;++i) {
						obj();
					}
				} else {
					for (;i<fl;++i) {
						obj();
					}
				}
			},
			vesion : "2.3.4"
		}
	},
	each: function( obj, fl ) {
		var i=0;
		for (;i<fl;++i) {
			obj();
		}
	}
}
var $=function(selector) {return new sup.get(selector);}
$.each=function(obj,fl) {return sup.each(obj,fl);}
log(`%c
										    		 #MMMMMMMMMMMMM
									    			#MMMMMMMMMMMMMM
								    			 BTWM		   #####
							    				RMMT	___	  #####
						    				   HMML		|O|	  #####
		`+new sup.get().vesion+`		    					  MMMLM		^^^	  #####
				    						MMMMLML		 	 #####
										   LMLM		 	 #######
										   LLMM		 	 #####
										   MMMM          MMMMM 
										 HMHMLH         ###### 
										MLHMH          MHMHM#
									  MMHM            ######
									MHMH             ######
								MHMHM               #####M
							MHMHMHM 			 ######
					HMHMHMHMMM				  #######
			MMHHMHMHMMMMM			  MMMMMM#####
		MHMMMHM    				  MMMMMHMHMH
	  UMHU                  MHMHMMMMM
	  UUMV              MMIMMLMMM
	   IVMH         MMMHFM
	   	  SUPMSMPPMGM`,"color:yellow");
