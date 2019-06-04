
let ytFeed = document.getElementById("page-manager")
let ytFeedParent = document.getElementById('page-manager').parentNode

ytFeed.parentNode.removeChild(ytFeed);  

let imgTag = document.createElement("img")
// image.src = "images/focus-icon128.png"
// let imageURL = ytFeedParent.appendChild(image)

console.log("7")

let imageURL = chrome.runtime.getURL("images/focus-icon128.png")
imgTag.src = imageURL

ytFeedParent.appendChild(imgTag)