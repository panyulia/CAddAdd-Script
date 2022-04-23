function re(id,test1,test2) {
	var ret = id.innerHTML = id.innerHTML.replace(test1,test2);
	return ret;
}
function c() {
	var s = document.getElementsByTagName('script');
	for (var x = 0; x < s.length; x++) {
		if (s[x].innerHTML.indexOf("\/\*",0) != -1 && s[x].innerHTML.indexOf("\*\/",s[x].innerHTML.length - 5) != -1) {
			var temp = s[x];
			var iff = true;
			break;
		} else {
			var iff = false;
		}
	}
	if (iff == !true) {
		console.clear();
		return;
	}
	if (temp.innerHTML.indexOf("\/\*",0) == -1) {return;}
	if (temp.innerHTML.indexOf("\*\/",temp.innerHTML.length - 5) == -1) {return;}
	if (temp.innerHTML.search(RegExp("#include <iostream>")) != -1) {var stream = true;} else {var stream = false;}
	if (temp.innerHTML.search(RegExp("using namespace std;")) != -1) {var np = true;} else {var np = false;}
	if (stream == true) {
		re(temp,RegExp("using namespace std;","g"),"// using namespace std;")
		re(temp,RegExp("int main()","g"),"function main")
		re(temp,RegExp("int","g"),"var");
		re(temp,RegExp("\%\%","g"),"\%");
		re(temp,RegExp("<<","g"),"+");
		re(temp,RegExp(">>","g"),"");
		if (np == true) {
			re(temp,RegExp(/std::cout[ ]\+[ ](.*)/,"g"),"textp.innerHTML = $1");
			re(temp,RegExp(/(\w*)std::cin(.*)(.*);/, "g"), "$2=prompt();");
			re(temp,RegExp("std::cin","g"),"");
			re(temp,RegExp(/cout[ ]\+[ ](.*)/,"g"),"textp.innerHTML = $1");
			re(temp,RegExp(/(\w*)cin(.*)(.*);/, "g"), "$2=prompt();");
			re(temp,RegExp("cin","g"),"");
		} else {
			re(temp,RegExp(/std::cout[ ]\+[ ](.*)/,"g"),"textp.innerHTML = $1");
			re(temp,RegExp(/(\w*)std::cin(.*)(.*);/, "g"), "$2=prompt();");
			re(temp,RegExp("std::cin","g"),"");
		}
		re(temp,RegExp("endl","g"),"\"<br>\"");
		re(temp,RegExp(/\/\*/,"g"),"");
		re(temp,RegExp(/\*\//,"g"),"");
		if (temp.innerHTML.search("function main() {") != -1) {temp.innerHTML = temp.innerHTML + "main();";}
		re(temp,/(\w*)#include(.*)<(.*)>/g,"// #include  <$3>");
	}
	console.log(temp.innerHTML);
	re(temp,/\</g,"&lt;");
	re(temp,/\>/g,"&gt;");
	re(temp,/[	]/g,"&emsp;");
	re(temp,/[\n]/g,"<br>");
	document.body.innerHTML = temp.innerHTML + document.body.innerHTML;
	document.onkeydown = function(e){
		var e = e || window.event,
			t = e.target || e.srcElement;
		if (e.ctrlKey && e.keyCode == 67) {
			e.preventDefault();
			alert("请打开控制台复制")
		}
	}
}
window.onload=c;
