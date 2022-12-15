var btnClick =document.querySelector("#btn-click");
var txtinput=document.querySelector("#txt");
var txtoutput=document.querySelector("#output-txt");
btnClick.addEventListener("click",function clickHandler(){
  txtoutput.innerText=" translated text "+txtinput.value;

})
