chrome.runtime.onInstalled.addListener(function(details){
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth()+1;
    if (d < 10) {
        d = "0"+d;
    }
    if (m < 10) {
        m = "0"+m;
    }
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    chrome.storage.local.set({'namee': ""});
    chrome.storage.local.set({'count': 0});
    chrome.storage.local.set({'dd': d});
    chrome.storage.local.set({'mm': m});
    chrome.storage.local.set({'yyyy': y});
    chrome.storage.local.set({'min': min});
    chrome.storage.local.set({'hour': h});
    //chrome.tabs.create({url: chrome.extension.getURL('welcome-page.html')});
});

chrome.runtime.onStartup.addListener(function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth()+1;
    if (d < 10) {
        d = "0"+d;
    }
    if (m < 10) {
        m = "0"+m;
    }
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    chrome.storage.local.set({'namee': ""});
    chrome.storage.local.set({'count': 0});
    chrome.storage.local.set({'dd': d});
    chrome.storage.local.set({'mm': m});
    chrome.storage.local.set({'yyyy': y});
    chrome.storage.local.set({'min': min});
    chrome.storage.local.set({'hour': h});
    //chrome.tabs.create({url: chrome.extension.getURL('welcome-page.html')});
})
