function addition() {
    document.getElementById('print').value = '+';
}

function minus() {
    document.getElementById('print').value = '-';
}

function multi() {
    document.getElementById('print').value = '*';
}

function division() {
    document.getElementById('print').value = '/';
}

function result() {
    let dau = document.getElementById('print').value;
    let num1 = + document.getElementById('num1').value;
    let num2 = + document.getElementById('num2').value;
    if(dau === '+') {
         let tong = num1 + num2;
         document.getElementById('result').value = tong;
    } else if(dau === '-') {
        let hieu = num1 - num2;
        document.getElementById('result').value = hieu;
    } else if(dau === '*') {
        let tich = num1 * num2;
        document.getElementById('result').value = tich;
    } else {
        let thuong = num1 / num2;
        document.getElementById('result').value = thuong;
    }
 }



