const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);
// form.addEventListener('submit', sumarInputValues);

function btnOnClick() {
    const resul = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado es: " + resul;
}

// function sumarInputValues(event) {
//     event.preventDefault();
//     const sumarInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado es: " + sumarInputs