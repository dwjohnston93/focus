document.addEventListener('DOMContentLoaded', userInput, false);

//takes 
function sendInput(input) { 
    console.log("input value is: " + input.value);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {file: ["fb.js", "yt.js"]}, function() {
            chrome.tabs.sendMessage(tabs[0].id,{
                input: input.value
            })
        });
    });
    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.
}

function userInput() {    
  document.getElementById('changeQuote').addEventListener('click', 
    function() { sendInput(document.getElementById('quoteInput'));
  });

  // you can add listeners for other objects ( like other buttons ) here 
}