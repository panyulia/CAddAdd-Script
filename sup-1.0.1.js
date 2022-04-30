var $=function(text) {
	return document.querySelector(text);
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
