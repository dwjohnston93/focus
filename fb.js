let fbFeed = document.getElementById('content_container')
let fbFeedParent =  document.getElementById('content_container').parentNode

fbFeed.parentNode.removeChild(fbFeed)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}    

$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    success: function(result) {
        // Returns a random number between min (inclusive) and max (exclusive)
    },
    error: function(err) {
        console.log("picsum err:", err  )
    }
  });

let txtTag= document.createElement('div')
txtTag.innerHTML = 'get that job!'
txtTag.className = 'imgTxt'
fbFeedParent.appendChild(txtTag)


let imgTag = document.createElement('img')
let imageURL = chrome.runtime.getURL('images/focus-icon128.png')
imgTag.src = imageURL
fbFeedParent.appendChild(imgTag)