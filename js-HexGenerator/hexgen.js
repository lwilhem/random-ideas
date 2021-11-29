//var formula = Math.floor(Math.random()*16777215).toString(16);

const trigger = document.getElementById('trigger');
const hexColor = document.getElementById('color-output');
const hexCode = document.getElementById('hex-code');

const hexData = [];

function hexWriter(randomizerResult){
    hexColor.style.backgroundColor = ["#" + randomizerResult];
    hexCode.innerHTML = ["#" + randomizerResult];
}

trigger.onclick = function hexGenerator(result){
    result = Math.floor(Math.random()*16777215).toString(16);
    hexWriter(result);
}