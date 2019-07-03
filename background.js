//listener to allow icon pop-up to appear when youtube or facebook is loaded
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostContains: 'www.youtube.com'}
                }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostContains: 'www.facebook.com'}
                })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
})

//default quote that is loaded
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({quote: 'Keep Grinding!'}, function() {
      console.log("current quote:", quote);
    });
  });