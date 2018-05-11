function suma() {
    var numero1 = Number(document.getElementById('num1').value);
    var numero2 = Number(document.getElementById('num2').value);
    var resultado = numero1 + numero2;
    document.getElementById('total').value = resultado;
}

function resta() {
    var numero1 = Number(document.getElementById('num1').value);
    var numero2 = Number(document.getElementById('num2').value);
    var resultado = numero1 - numero2;
    document.getElementById('total').value = resultado;
}

function multiplicacion() {
    var numero1 = Number(document.getElementById('num1').value);
    var numero2 = Number(document.getElementById('num2').value);
    var resultado = numero1 * numero2;
    document.getElementById('total').value = resultado;
}

function divicion() {
    var numero1 = Number(document.getElementById('num1').value);
    var numero2 = Number(document.getElementById('num2').value);
    var resultado = numero1 / numero2;
    document.getElementById('total').value = resultado;
}
