/*
	中文(Chinese)
	C/C++语言转javascript语言c++-script-1.0.0beta.js
	先导入js{
		<script src="c++-script-1.0.0beta.js"></script>
	}
	然后右键点击检查，点击控制台
	!!!
		警告: 写的时候要写到行注释里面，否则无效
		警告: c(scriptID,coutID)
	!!!

	English(English)
	C/C++ language to JavaScript language C++-script-1.0.0beta .js

	Import js{
		<script src="c++-script-1.0.0beta.js"></script>

	}
	Then right-click Check and click Console
	!!!
		Warning: Write in a line comment, otherwise it will not work
	!!!
*/

function c(temp) {
	if (temp.innerHTML.indexOf("\/\*",0) != -1) {} else {return;}
	if (temp.innerHTML.indexOf("\*\/",temp.innerHTML.length - 5) != -1) {} else {return;}
	if (temp.innerHTML.search(RegExp("#include <iostream>")) != -1) {var stream = true;} else {var stream = false;}
	if (temp.innerHTML.search(RegExp("using namespace std;")) != -1) {var np = true;} else {var np = false;}
	temp.innerHTML = temp.innerHTML.replace(/(\w*)#include(.*)<(.*)>/g,"// #include  <$3>");
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
			temp.innerHTML = temp.innerHTML.replace(RegExp("std::cout","g"),"textp.innerHTML =");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/(\w*)std::cin(.*)(.*);/, "g"), "$2=prompt();");
			temp.innerHTML = temp.innerHTML.replace(RegExp("std::cin","g"),"");
			temp.innerHTML = temp.innerHTML.replace(RegExp("cout","g"),"textp.innerHTML =");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/(\w*)cin(.*)(.*);/, "g"), "$2=prompt();");
			temp.innerHTML = temp.innerHTML.replace(RegExp("cin","g"),"");
		} else {
			temp.innerHTML = temp.innerHTML.replace(RegExp("std::cout","g"),"textp.innerHTML =");
			temp.innerHTML = temp.innerHTML.replace(RegExp(/(\w*)std::cin(.*)(.*);/, "g"), "$2=prompt();");
			temp.innerHTML = temp.innerHTML.replace(RegExp("std::cin","g"),"");
		}
		temp.innerHTML = temp.innerHTML.replace(RegExp("endl","g"),"\"<br>\"");
		temp.innerHTML = temp.innerHTML.replace(RegExp(/\/\*/,"g"),"");
		temp.innerHTML = temp.innerHTML.replace(RegExp(/\*\//,"g"),"");
	}
	console.log(temp.innerHTML);
}
c(document.getElementById("c++"));
