function click1() {
	window.open('https://www.teresaschoolkgm.org/');
}

function click2() {
	window.open('https://www.amu.ac.in/');
}

function click3() {
	window.open('https://www.iiit.ac.in/');
}

function startTime() {
	var month = new Array();
	  month[0] = "January";
	  month[1] = "February";
	  month[2] = "March";
	  month[3] = "April";
	  month[4] = "May";
	  month[5] = "June";
	  month[6] = "July";
	  month[7] = "August";
	  month[8] = "September";
	  month[9] = "October";
	  month[10] = "November";
	  month[11] = "December";

  	const t= new Date();
	let d= t.getDate();
  	let mo= month[t.getMonth()];
  	let y= t.getFullYear();
  	let h= t.getHours();
  	let m= t.getMinutes();
  	let s= t.getSeconds();
  	m= checkTime(m);
  	s= checkTime(s);
  	document.getElementById('timer').innerHTML = "Live Date & Time: " + mo + " " + d + ", " + y + " " + h + ":" + m + ":" + s;
  	setTimeout(startTime, 1000);
}

function checkTime(i) {
  	if (i < 10) {i = "0" + i};
  	return i;
}

function fun1()
{
	document.getElementById("education").style.display="none";
	document.getElementById("contact").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("home").style.display="block";
}

function fun2()
{
	document.getElementById("education").style.display="none";
	document.getElementById("contact").style.display="none";
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="block";
}
function fun3()
{
	document.getElementById("home").style.display="none";
	document.getElementById("contact").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("education").style.display="block";
}
function fun4()
{
	document.getElementById("education").style.display="none";
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("contact").style.display="block";
}

