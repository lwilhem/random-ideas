const trigger = document.getElementById('trigger');
const hexColor = document.getElementById('color-output');
const hexCode = document.getElementById('hex-code');

const hexData = []; // will be useful later to store & display multiple hex

function hexWriter(randomizerResult){ //write hexGenerator result with a valdi format 
    hexColor.style.backgroundColor = ["#" + randomizerResult];
    hexCode.innerHTML = ["#" + randomizerResult];
}

trigger.onclick = function hexGenerator(result){
    result = Math.floor(Math.random()*16777215).toString(16); //math functions to generate a valid hex code
    hexWriter(result);
}