function exchangeCurrency() {
    let amount = document.getElementById('amount').value;
    let curencyFrom = document.getElementById('from').value;
    let curencyTo = document.getElementById('to').value;
    if(curencyFrom===curencyTo) {
        let result = amount;
        document.getElementById('result').innerHTML = 'Result: ' + result + " " + curencyTo;
    } else if(curencyFrom === 'vnd' && curencyTo === 'usd') {
        let result = amount / 23000;
        document.getElementById('result').innerHTML = 'Result: ' + result + " " + curencyTo;
    } else {
        let result = amount * 23000;
        document.getElementById('result').innerHTML = 'Result: ' + result + " " + curencyTo;
    }
}





