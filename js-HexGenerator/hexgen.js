const hexColor = document.getElementById('color-output');
const hexCode = document.getElementById('hex-code');
const hexDataClear = document.getElementsByClassName('clear-memory');

var hexData = []; // will be useful later to store & display multiple hex (Hesitation between JSON parse and array to store Hex Value)

function hexWriter(randomizerResult){ //write hexGenerator result with a valid format

    let getStyle = getComputedStyle(hexColor);
    let comparatorTarget = getStyle.backgroundColor;

    if(randomizerResult == comparatorTarget){ //Check if the Generated value is the same that the one applied
        alert('Oups! that was the same color!');
        return;
    }
    else if(hexData.length >= 5){
        alert('Seems like hexData is fed! Git Gud scrub!');
        return;
    }
    else{
        hexColor.style.backgroundColor = ["#" + randomizerResult];
        let formatedHex = hexCode.innerHTML = ["#" + randomizerResult];
        hexData.push(formatedHex);
    }
}

document.addEventListener('keydown', event => {
    if(event.isComposing || event.key === ' '){
        event.preventDefault();
        result = Math.floor(Math.random()*16777215).toString(16); //math functions to generate a valid hex code
        hexWriter(result);
    }
    else{
        return;
    }
})

hexDataClear.onclick(function hexClear(){ // Used to Reset the hexData Array;
    hexData = [];
    alert('hexData Cleared!');
})

//Future plans : How I will improve this:
//  - Keyboard detection with/over button pressing, DONE => Space key
//  - Add an error check if the same color is generated twice in a row(or is already generated, see below), DONE
//  - possibility to create a color palette, with JSON functionality,
//  - Improve code readability. WIP
