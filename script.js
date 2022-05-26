const butt_mais = document.getElementById("button_mais")
const butt_menos = document.getElementById("button_menos")
let display = document.getElementById("display")
const button = document.querySelector(".addcart")
const resul = document.getElementById("result")

let displayvalue = 1
let valuesave;


var checksContainer = document.getElementById("checkboxcontainer");

var chekboxes = checksContainer.getElementsByClassName("checkbox");

for (var i = 0; i < chekboxes.length; i++) {
    chekboxes[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("checkactive");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" checkactive", "");
    }
    this.className += " checkactive";
  });
}



butt_mais.addEventListener("click", ()=>{
    if(displayvalue >= 1) {
        butt_menos.style.display = "flex"
        valuesave = displayvalue++
        display.innerHTML = valuesave
    }
    display.innerHTML = displayvalue
})

butt_menos.addEventListener("click", ()=>{
    if (displayvalue > 1){
        valuesave = displayvalue--
        display.innerHTML = valuesave
        display.innerHTML = displayvalue
    }else if(displayvalue == 1){
        butt_menos.style.display = "none"
    }
})
button.addEventListener("click", ()=>{
    resul.innerHTML = "Você adicionou "+ displayvalue + " item!"
})


