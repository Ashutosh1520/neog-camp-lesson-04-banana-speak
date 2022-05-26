var translateButton = document.querySelector("#btn-translate");
translateButton.addEventListener("click",buttonClickHandler)

var outputDiv = document.querySelector("#output-text");
var inputText = document.querySelector("#txt-input");

//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url = "https://api.funtranslations.com/translate/yoda.json"

function getTranslatedUrl(input){
    return url+"?"+"text="+input
}

function errorHandler(error){
    console.log("error occured:",error);
    alert("something is wrong with server! try again after some time");
}


// works without event too
function buttonClickHandler(event){
    var inputValue = getTranslatedUrl(inputText.value); 
    fetch(inputValue)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}


