var toIn = document.getElementById('in');
var toOut = document.getElementById('out');
var btn = document.getElementById('calculate');
var result = document.getElementById('natija');
var fromVal = document.getElementById('fromVal');
var toVal = document.getElementById('toVal');

btn.addEventListener('click', ()=>{

    result.textContent = '';
    var value1 = +toIn.value;
    var value2 = +toOut.value;
    var a = "Natija: " + value1 * value2;
    result.textContent += a + " " + toVal.value;
})


