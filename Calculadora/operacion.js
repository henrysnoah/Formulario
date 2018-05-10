/*unction calcula(operacion) { //Su función es hacer la operación. Mas adelante veremos como la aplica en la caja.   
            var operando1 = Number(document.getElementById'operando1').value; // operando1 y operando2 son los que tienen los valores con los que se hará las operaciones.
            var operando2 = Number(document.getElementById'operando2').value
            var result = eval(operando1 + operacion + operando2) //Nos produce el resultado de la operación entre operando1 y operando2.
            document.getElementById('resultado').value = result; //Nos escribe el resultado en la caja.

        }    */
function suma() {
    
    var operando1 = Number(document.getElementById('num1').value);
    var operando2 = Number(document.getElementById('num2').value;
    var result = operando1+operando2;
    
    document.getElementById('resultado').value=result;
    
}