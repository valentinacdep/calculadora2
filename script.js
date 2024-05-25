const display = document.getElementById('display')

function appendCharacter(char) {
    if(display.innerText === '0' && char != '.'){
        display.innerText = char
    } else {
    if(!(char == '.' && display.innerText[display.innerText.length - 1] == '.'))
        display.innerText += char;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult(){
    display.innerText = eval(display.innerText)
}