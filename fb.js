//attributions to inspirational images used
let credits = ["Alex Haney", "Joshua Earle", "Malcolm Lightbody"]

//grab fb's feed element and parent, and remove the feed
let fbFeed = document.getElementById('content_container')
let fbFeedParent =  document.getElementById('content_container').parentNode
fbFeed.parentNode.removeChild(fbFeed)

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

console.log("3")

//create inspirational quote, credit, and image dynamically
chrome.storage.sync.get(['quote'], function(result) {
    console.log('Value currently is:' + result.quote)
    let quoteElem= document.createElement('h2')
    quoteElem.id = 'inspireQuote'
    quoteElem.innerHTML = result.quote
    quoteElem.className = 'quote'
    fbFeedParent.appendChild(quoteElem)
    fbFeedParent.appendChild(credit)
    fbFeedParent.appendChild(imgTag)
});




let credit = document.createElement('h6')
credit.id = 'fbCredit'
credit.innerHTML = `Photo by ${credits[imageNum]} on Unsplash`


let imgTag = document.createElement('img')
let imageURL = chrome.runtime.getURL(`images/facebook${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
imgTag.id = 'fbImg'

document.addEventListener("click", rotateImage)