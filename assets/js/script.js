const corpoTombola = document.getElementById('corpoTombola');
const btnEstrazione = document.getElementById('estrazione');
const estractNum = [];

document.addEventListener('load', init());
function init() {
    griglia();
}

function griglia() {
    for (let i=0; i<76; i++) {
        const numeri = document.createElement('div');
        numeri.innerText = i+1;
        corpoTombola.appendChild(numeri);
    }
}

btnEstrazione.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*76);
    estractNum.push(randomNumber);
    const divGenerali = document.querySelectorAll('#corpoTombola div');
    for (let i=0; i<divGenerali.length; i++) {
        if (divGenerali[i].innerText == randomNumber) {
            divGenerali[i].classList.add('estratto');
        }
    }
})