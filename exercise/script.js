let container = document.getElementById("maincontainer")
let btn = document.createElement("button")
container.appendChild(btn)
const worker = new Worker('worker.js');

document.getElementById('maincontainer').addEventListener('click', () => {
    worker.postMessage('ButtonClicked');
});

