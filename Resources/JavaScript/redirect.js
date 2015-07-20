var urls = new Array("Kayle.html");
function redirect()
{
	window.location = urls[Math.floor(urls.length*Math.random())];
}
var temp = setInterval("redirect()",100);