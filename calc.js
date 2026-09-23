function addition() {
    let first = Number(document.getElementById("first-num").value);
    let second = Number(document.getElementById("second-num").value);
    let result = first + second;
    document.getElementById("output").innerHTML = String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function subtraction() {
    let first = Number(document.getElementById("first-num").value);
    let second = Number(document.getElementById("second-num").value);
    let result = first - second;
    document.getElementById("output").innerHTML = String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function multiplication() {
    let first = Number(document.getElementById("first-num").value);
    let second = Number(document.getElementById("second-num").value);
    let result = first * second;
    document.getElementById("output").innerHTML = String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function division() {
    let first = Number(document.getElementById("first-num").value);
    let second = Number(document.getElementById("second-num").value);
    let result = first / second;
    document.getElementById("output").innerHTML = String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function exponentiation() {
    let first = Number(document.getElementById("first-num").value);
    let second = Number(document.getElementById("second-num").value);
    let result = 1;
    for (let i = 0; i < second; i++) {
        result = first * result;
    }
    document.getElementById("output").innerHTML = String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function calc_clear() {
    document.getElementById("first-num").value = "";
    document.getElementById("second-num").value = "";
    document.getElementById("output").innerHTML = "";
}