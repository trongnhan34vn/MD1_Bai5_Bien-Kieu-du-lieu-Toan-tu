// Kiểu số nguyên
let i = 10;
// Kiểu số thực
let f = 20.5;
//Kiểu logic
// let b = true;
//Kiểu chuỗi
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
// document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)

// Khai báo width & height và tính diện tích trả về kqqua

let width = 20;

let height = 10;

let area = width * height;

document.write('<br/>');
document.write('Area = ' + area);

// Dùng prompt() nhập 2 số từ bàn phím, lưu vào 2 biến a & b. Kiểm tra a chia hết cho b không? in ra kết quả ở hàm alert
// Cách 1:
// let a = prompt('Number 1?');
// let b = prompt('Number 2?');
// if(a % b === 0) {
//     alert('biến a chia hết b')
// } else alert('biến a không chia hết cho b')

// Cách 2

function divisible() {
    let a = + document.getElementById('var-a').value;
    let b = + document.getElementById('var-b').value;
    if (a % b === 0) {
        document.getElementById('result').innerText += ' chia hết'
    } else document.getElementById('result').innerText += ' không chia hết'
}

