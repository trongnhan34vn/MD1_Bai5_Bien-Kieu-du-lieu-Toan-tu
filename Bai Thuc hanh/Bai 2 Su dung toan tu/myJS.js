function core() {
    let a = + document.getElementById('length').value;
    let b = + document.getElementById('width').value;
    let c = a * b;
    document.getElementById('result').innerText += ' ' + c
}