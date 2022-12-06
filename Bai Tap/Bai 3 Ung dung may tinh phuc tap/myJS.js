function onScreen(input) {
    document.getElementById('screen').value += input;
}

function result() {
    let input = document.getElementById('screen').value;
    let result = eval(input);
    document.getElementById('screen').value = result;
}

function clearScreen() {
    document.getElementById('screen').value = ' ';
}