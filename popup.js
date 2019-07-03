document.addEventListener('DOMContentLoaded', userInput, false);

//sends user input as message to fb and yt.js
function sendInput(input) { 
    console.log("input value is: " + input.value);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {file: ["fb.js", "yt.js"]}, function() {
            chrome.tabs.sendMessage(tabs[0].id,{
                input: input.value
            })
        });
    });
}

//listens for change quote buton and sends user input to sendInput()
function userInput() {    
  document.getElementById('changeQuote').addEventListener('click', 
    function() { sendInput(document.getElementById('quoteInput'));
  });
}