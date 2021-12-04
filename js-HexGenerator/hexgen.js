const hexColor = document.getElementById('color-output');
const hexCode = document.getElementById('hex-code');
const trigger = document.getElementById('trigger')

const hexData = []; // will be useful later to store & display multiple hex

function hexWriter(randomizerResult){ //write hexGenerator result with a valid format
    
    let getStyle = getComputedStyle(hexColor);
    let comparatorTarget = getStyle.backgroundColor;

    if(randomizerResult == comparatorTarget){
        return;
    }
    else{
    hexColor.style.backgroundColor = ["#" + randomizerResult];
    hexCode.innerHTML = ["#" + randomizerResult];
    }
}

trigger.onclick = function hexGenerator(result){
    result = Math.floor(Math.random()*16777215).toString(16); //math functions to generate a valid hex code
    hexWriter(result);
}


//Future plans : How I will improve this:
//  - Keyboard detection with/over button pressing,
//  - Add an error check if the same color is generated twice in a row(or is already generated, see below),
//  - possibility to create a color palette, with JSON functionality,
//  - Improve code readability.


