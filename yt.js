
let ytFeed = document.getElementById("page-manager")
let ytFeedParent = document.getElementById('page-manager').parentNode

ytFeed.parentNode.removeChild(ytFeed);  

let txtTag = document.createElement('div')
txtTag.innerHTML = 'get that job!'
txtTag.className = 'imgTxt'
ytFeedParent.appendChild(txtTag)

let imgTag = document.createElement("img")
let imageURL = chrome.runtime.getURL("images/focus-icon128.png")
imgTag.src = imageURL
ytFeedParent.appendChild(imgTag)