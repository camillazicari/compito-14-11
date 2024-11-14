const corpoTombola = document.getElementById('corpoTombola');

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