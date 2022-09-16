var txtInput = document.querySelector("#txt-input");
var btntranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#translated-output");

var translationURL = "https://api.funtranslations.com/translate/groot.json"


function GetTranslationURL(input)
{

    return translationURL + "?" + "text=" + input; 

}


function ErrorHandler(error)
{
    console.log("error occured", error);
    alert("something is wrong!");
}


function clickHandler()
{


    var inputText = txtInput.value;
    
    fetch(GetTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {

    
        var Translatedtxt = json.contents.translated;
        txtOutput.innerText = Translatedtxt;
    })
    .catch(ErrorHandler)


};



btntranslate.addEventListener("click", clickHandler);