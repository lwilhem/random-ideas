const trigger = document.getElementById('trigger');
let outputColor = document.getElementById('color-ouput');
let outputCode = document.getElementById('hex-code');

trigger.addEventListener("click", function hexGenerator(){
    var formula = Math.floor(Math.random()*16777215).toString(16);
});