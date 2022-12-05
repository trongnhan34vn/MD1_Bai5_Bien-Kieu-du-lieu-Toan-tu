function convert() {
    let c = + document.getElementById('cen').value;
    let f = c * 1.8 + 32;
    document.getElementById('result').innerHTML = f + ' độ F'
}