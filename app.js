var btn = document.querySelector(".btn");
var textInput = document.querySelector(".text-input");
var output = document.querySelector(".output");

//function of button event + text value
function clickHandler() {
  output.innerText = "Translated:" + textInput.value;
}
//button event
btn.addEventListener("click", clickHandler);
