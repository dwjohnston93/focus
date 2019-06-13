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