//listener that updates quote to the user input
chrome.runtime.onMessage.addListener(updateQuote);
function updateQuote(message){
    newQuote = message.input;
    if (typeof newQuote === 'string') {
        document.getElementById('inspireQuote').innerHTML = newQuote
    }
}

//attributions to inspirational images used
let credits = ["Alex Haney", "Joshua Earle", "Malcolm Lightbody"]

//grab inspirational quote from storage and append quote, credit, and img to DOM
let fbFeed = document.getElementById('content_container')
let fbFeedParent =  document.getElementById('content_container').parentNode
fbFeed.parentNode.removeChild(fbFeed)

//function to cycle through images and quotes
var imageNum = 0;
function rotateImage(){
    if(imageNum === 2){
        imageNum = -1; 
    }
    imageNum++
    console.log("imageNum:", imageNum)
    document.getElementById('fbImg').src = chrome.runtime.getURL(`images/facebook${imageNum}.jpg`)
    document.getElementById('fbCredit').innerHTML = `Photo by ${credits[imageNum]} on Unsplash`
}

//grab inspirational quote from storage and append quote, credit, and img to DOM
chrome.storage.sync.get(['quote'], function(result) {
    let quoteElem= document.createElement('h2')
    quoteElem.id = 'inspireQuote'
    quoteElem.innerHTML = result.quote
    quoteElem.className = 'quote'
    fbFeedParent.appendChild(quoteElem)
    fbFeedParent.appendChild(credit)
    fbFeedParent.appendChild(imgTag)
});

//create credit element 
let credit = document.createElement('h6')
credit.id = 'fbCredit'
credit.innerHTML = `Photo by ${credits[imageNum]} on Unsplash`

//create image element
let imgTag = document.createElement('img')
let imageURL = chrome.runtime.getURL(`images/facebook${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
imgTag.id = 'fbImg'

//event listener for clicks to rotate image
document.addEventListener("click", rotateImage)