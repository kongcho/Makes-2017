var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var header = document.createElement('h1');
header.textContent = "This page has been eaten";
document.body.appendChild(header);

var css_file = chrome.extension.getURL("meme.css");
console.log("css file");
console.log(css_file);

links = document.getElementsByTagName("LINK");
console.log(links);

for (i in links) {
	if (links[i].rel == "stylesheet") {
		var jelm = $(links[i]);
		jelm.remove();
	}
}


$('<link rel="stylesheet" type="text/css" href="' + css_file + '" >').appendTo("head");
