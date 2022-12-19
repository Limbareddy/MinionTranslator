var btnClick =document.querySelector("#btn-click");
var txtinput=document.querySelector("#txt");
var txtoutput=document.querySelector("#output-txt");
var serverurl="https://api.funtranslations.com/translate/minion.json"


function gettTranslation(text){
  return serverurl+"?"+"text="+text;

}

function errorHandler(error){
  alert("something went wrong");

}


function clickHandler(){
  var inputText= txtinput.value;

fetch(gettTranslation(inputText))
.then(Response=>Response.json())
.then(json=>  { var translatedText =json.contents.translated;
  txtoutput.innerText=translatedText;
})
.catch(errorHandler)
 
};

btnClick.addEventListener("click",clickHandler())
