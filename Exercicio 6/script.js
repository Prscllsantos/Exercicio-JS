let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let oper = document.getElementById('oper');


function showresult(){

let num1 = parseInt(num1.valueOf);
let num2 = parseInt(num2.valueOf);
let oper = parsefloat(oper.value);
let resultado = 0

if(oper === '+'){
    resultado = num1 + num2
    alert(resultado)
}else if(oper ==='-'){
    resultado = num1 - num2
    alert(resultado)
}else if(oper === '/'){
    resultado = num1 / num2
    alert(resultado)
}else{
    resultado = num1 * num2
    alert(resultado)
}

}