const inputEl = document.getElementById("inputEl")
const convertbtn = document.getElementById("convertbtn")
const resultEl = document.getElementById("resultEl")
const choice = document.getElementById("units")
let buttons = document.getElementsByClassName("unitchoice")
const reversbtn = document.getElementById("revers")
let op = 0
let result = ""
let revers = 0

convertbtn.addEventListener("click", function(){
if(revers === 0){
    if(op == 1){
        result = (Number(inputEl.value) * 3.28084).toFixed(2)
        console.log(result)
        resultEl.textContent = result + " ft"
    }
    else if (op == 2){
        result = (Number(inputEl.value) * 2.20462).toFixed(2)
        resultEl.textContent = result + " lb"
        console.log(result)
    }
    else{
        result = (Number(inputEl.value) / 3.785).toFixed(2)
        resultEl.textContent = result + " gal"
        console.log(result)
    }
    }
    else if(revers === 1){
    if(op == 1){
        result = (Number(inputEl.value) / 3.28084).toFixed(2)
        console.log(result)
        resultEl.textContent = result + " M"
    }
    else if (op == 2){
        result = (Number(inputEl.value) / 2.20462).toFixed(2)
        resultEl.textContent = result + " kg"
        console.log(result)
    }
    else{
        result = (Number(inputEl.value) * 3.785).toFixed(2)
        resultEl.textContent = result + " L"
        console.log(result)
    }
    }
})

choice.addEventListener("click", function(event){
    for(let i = 0; i <buttons.length; i++){
        buttons[i].style.backgroundColor = "#a537ff"
    }
      
    
    let hello = event.target
    if(hello.className === "unitchoice"){
        op = hello.id
        event.target.style.backgroundColor = "#792ab9"
        
    }
})
reversbtn.addEventListener("click", function(){
    if (revers === 0){
        reversbtn.textContent = "Us to metric"
        revers = 1
    }
    else{
        reversbtn.textContent = "Metric to US"
        revers = 0 
    }
})
