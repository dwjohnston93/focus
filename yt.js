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
let quote = document.createElement('h2')
quote.innerHTML = 'get that job!'
quote.className = 'quote ytQuote'

let credit = document.createElement('h6')
credit.id = 'ytCredit'
credit.className = 'credit'
credit.innerHTML = `Photo by ${credits[imageNum]} on Unsplash`

ytFeedParent.appendChild(quote)
ytFeedParent.appendChild(credit)

let imgTag = document.createElement("img")
let imageURL = chrome.runtime.getURL(`images/youtube${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
imgTag.id = 'ytImg'
ytFeedParent.appendChild(imgTag)

document.addEventListener("click", rotateImage)