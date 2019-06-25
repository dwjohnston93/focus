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

//create inspirational quote, credit, and image dynamically
let quote= document.createElement('h2')
quote.innerHTML = 'get that job!'
quote.className = 'quote'

let credit = document.createElement('h6')
credit.id = 'fbCredit'
credit.innerHTML = `Photo by ${credits[imageNum]} on Unsplash`

fbFeedParent.appendChild(quote)
fbFeedParent.appendChild(credit)

let imgTag = document.createElement('img')
let imageURL = chrome.runtime.getURL(`images/facebook${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
imgTag.id = 'fbImg'
fbFeedParent.appendChild(imgTag)

document.addEventListener("click", rotateImage)