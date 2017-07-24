var myHeading = document.querySelector('h1');
myHeading.textContent = 'Data Types';


var a = [1,2,3];
var b = [1,2,3];

var c = (a == b);
document.getElementById("demo1").innerHTML = c;

var d = "a";
var e = 5;
var f = new Array("a","b","c");

document.getElementById("demo2").innerHTML = a.constructor == Array;