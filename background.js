chrome.runtime.onInstalled.addListener(function(details){
    chrome.storage.local.set({'namee': ""});
    //chrome.tabs.create({url: chrome.extension.getURL('welcome-page.html')});
});

chrome.runtime.onStartup.addListener(function() {
    chrome.storage.local.set({'namee': ""});
    //chrome.tabs.create({url: chrome.extension.getURL('welcome-page.html')});
   })