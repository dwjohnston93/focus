let fbFeed = document.getElementById('content_container')
let fbFeedParent =  document.getElementById('content_container').parentNode

fbFeed.parentNode.removeChild(fbFeed)

let imageNum = 0;

let txtTag= document.createElement('div')
txtTag.innerHTML = 'get that job!'
txtTag.className = 'imgTxt'
fbFeedParent.appendChild(txtTag)

let imgTag = document.createElement('img')
let imageURL = chrome.runtime.getURL(`images/facebook${imageNum}.jpg`)
imgTag.src = imageURL
imgTag.className = 'img'
fbFeedParent.appendChild(imgTag)