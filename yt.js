//listener that updates quote to the user input
chrome.runtime.onMessage.addListener(updateQuote);
function updateQuote(message){
    newQuote = message.input;
    if (typeof newQuote === 'string') {
        document.getElementById('inspireQuote').innerHTML = newQuote
    }
}

//attributions to inspirational images used
let credits = ["Charles PH", "Julie Thornton", "Court Prather"]

//grab youtube's feed element and parent, and remove the feed
let ytFeed = document.getElementById("page-manager")
let ytFeedParent = document.getElementById('page-manager').parentNode
ytFeed.parentNode.removeChild(ytFeed);  

var imageNum = 0;
function rotateImage(){
    if(imageNum === 2){
        imageNum = -1; 
    }
    imageNum++
    console.log("imageNum:", imageNum)
    document.getElementById('ytImg').src = chrome.runtime.getURL(`images/youtube${imageNum}.jpg`)
    document.getElementById('ytCredit').innerHTML = `Photo by ${credits[imageNum]} on Unsplash`
}

//create inspirational quote, credit, and image dynamically
chrome.storage.sync.get(['quote'], function(result) {
    let quoteElem= document.createElement('h2')
    quoteElem.id = 'inspireQuote'
    quoteElem.innerHTML = result.quote
    quoteElem.className = 'quote ytQuote'
    ytFeedParent.appendChild(quoteElem)
    ytFeedParent.appendChild(credit)
    ytFeedParent.appendChild(imgTag)
});

// let quote = document.createElement('h2')
// quote.innerHTML = document.getElementById('quote')
// quote.className = 'quote ytQuote'

let credit = document.createElement('h6')
credit.id = 'ytCredit'
credit.className = 'credit'
credit.innerHTML = `Photo by ${credits[imageNum]} on Unsplash`

let imgTag = document.createElement("img")
let imageURL = chrome.runtime.getURL(`images/youtube${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
imgTag.id = 'ytImg'
ytFeedParent.appendChild(imgTag)

document.addEventListener("click", rotateImage)