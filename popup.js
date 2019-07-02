console.log("popup.js loads")

function changeQuote(){
    console.log("hit")
    let userInput = document.getElementById('quoteInput').value
    document.getElementById('inspireQuote').innerHTML = userInput
}

document.getElementById('changeQuote').addEventListener('click', changeQuote)
