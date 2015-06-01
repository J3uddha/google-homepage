window.onload=function(){
// alert("yo");
var i=0;
for (i=3; i<7; i++) {
	document.getElementsByTagName("a")[i].innerHTML = "<img height=40px src='images/" + document.getElementsByTagName("a")[i].innerHTML + ".png'" + ">";
};
};