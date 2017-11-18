chrome.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    chrome.tabs.executeScript({
      file: "page-eater.js"
    });
  }
});
