var header = document.createElement('h1');
header.textContent = "This page has been eaten";
document.body.appendChild(header);

var css_file = chrome.extension.getURL("meme.css");
$('<link rel="stylesheet" type="text/css" href="' + css_file + '" >').appendTo("head");
