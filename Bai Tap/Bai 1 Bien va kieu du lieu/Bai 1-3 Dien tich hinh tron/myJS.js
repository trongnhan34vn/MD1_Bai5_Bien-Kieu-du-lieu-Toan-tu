function area() {
    let r = + document.getElementById('radius').value;
    let s = r * r * 3.14
    document.getElementById('result').innerHTML = s + ' m2'
}