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

//function to cycle through images and quotes
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

//grab inspirational quote from storage and append quote, credit, and img to DOM
chrome.storage.sync.get(['quote'], function(result) {
    let quoteElem= document.createElement('h2')
    quoteElem.id = 'inspireQuote'
    quoteElem.innerHTML = result.quote
    quoteElem.className = 'quote ytQuote'
    ytFeedParent.appendChild(quoteElem)
    ytFeedParent.appendChild(credit)
    ytFeedParent.appendChild(imgTag)
});

//create credit element 
let credit = document.createElement('h6')
credit.id = 'ytCredit'
credit.className = 'credit'
credit.innerHTML = `Photo by ${credits[imageNum]} on Unsplash`

//create image element
let imgTag = document.createElement("img")
let imageURL = chrome.runtime.getURL(`images/youtube${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
imgTag.id = 'ytImg'
ytFeedParent.appendChild(imgTag)

//event listener for clicks to rotate image
document.addEventListener("click", rotateImage)