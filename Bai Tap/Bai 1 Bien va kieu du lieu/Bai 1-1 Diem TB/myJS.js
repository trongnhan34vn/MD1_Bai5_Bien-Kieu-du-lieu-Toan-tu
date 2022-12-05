function demo() {
    let a = + document.getElementById('math').value;
    let b = + document.getElementById('physic').value;
    let c = + document.getElementById('chemistry').value;
    let d = (a + b + c) / 3;
    document.getElementById('result').innerHTML = d
}