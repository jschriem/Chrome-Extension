chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newUrl = "https://www.google.com/";
    chrome.tabs.create({ url: newUrl });
});
