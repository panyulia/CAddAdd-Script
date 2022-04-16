function c() {
	var s = document.getElementsByTagName('script');
	for (var x = 0; x < s.length; x++) {
		if (s[x].innerHTML.indexOf("\/\*",0) != -1 || s[x].innerHTML.indexOf("\*\/",s[x].innerHTML.length - 5) != -1) {
			var temp = s[x];
			break;
		}
	}
	if (temp.innerHTML.indexOf("\/\*",0) == -1) {return;}
	if (temp.innerHTML.indexOf("\*\/",temp.innerHTML.length - 5) == -1) {return;}
	if (temp.innerHTML.search(RegExp("#include <iostream>")) != -1) {var stream = true;} else {var stream = false;}
	if (temp.innerHTML.search(RegExp("using namespace std;")) != -1) {var np = true;} else {var np = false;}
	if (stream == true) {
		temp.innerHTML = temp.innerHTML.replace(RegExp("#include <iostream>","g"),"// #include <iostream>")
		temp.innerHTML = temp.innerHTML.replace(RegExp("using namespace std;","g"),"// using namespace std;")
		temp.innerHTML = temp.innerHTML.replace(RegExp("int main()","g"),"function main")
		temp.innerHTML = temp.innerHTML.replace(RegExp("#include <window.h>","g"),"// #include <window.h>");
		temp.innerHTML = temp.innerHTML.replace(RegExp("int","g"),"var");
		temp.innerHTML = temp.innerHTML.replace(RegExp("\%\%","g"),"\%");
		temp.innerHTML = temp.innerHTML.replace(RegExp("<<","g"),"+");
		temp.innerHTML = temp.innerHTML.replace(RegExp(">>","g"),"");
		if (np == true) {
			temp.innerHTML = temp.innerHTML.replace(RegExp(/std::cout[ ]\+[ ](.*)/,"g"),"textp.innerHTML = $1");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/(\w*)std::cin(.*)(.*);/, "g"), "$2=prompt();");
			temp.innerHTML = temp.innerHTML.replace(RegExp("std::cin","g"),"");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/cout[ ]\+[ ](.*)/,"g"),"textp.innerHTML = $1");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/(\w*)cin(.*)(.*);/, "g"), "$2=prompt();");
			temp.innerHTML = temp.innerHTML.replace(RegExp("cin","g"),"");
		} else {
			temp.innerHTML = temp.innerHTML.replace(RegExp(/std::cout[ ]\+[ ](.*)/,"g"),"textp.innerHTML = $1");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/(\w*)std::cin(.*)(.*);/, "g"), "$2=prompt();");
			temp.innerHTML = temp.innerHTML.replace(RegExp("std::cin","g"),"");
		}
		temp.innerHTML = temp.innerHTML.replace(RegExp("endl","g"),"\"<br>\"");
		temp.innerHTML = temp.innerHTML.replace(RegExp(/\/\*/,"g"),"");
		temp.innerHTML = temp.innerHTML.replace(RegExp(/\*\//,"g"),"");
		if (temp.innerHTML.search("function main() {") != -1) {temp.innerHTML = temp.innerHTML + "main();";}
		temp.innerHTML = temp.innerHTML.replace(/(\w*)#include(.*)<(.*)>/g,"// #include  <$3>");
	}
	console.log(temp.innerHTML);
}
c();
