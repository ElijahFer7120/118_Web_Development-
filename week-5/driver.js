const message = document.querySelector('#message');
const updateButton = document.querySelector('#updatebutton');
const updateButton2 = document.querySelector('#updatebutton2');

function updateMessage() {
    message.textContent = "good, now watch MY-TH"
}
function updateMessage2() {
    message.textContent = "Go watch it now!"
}
updateButton.addEventListener('click', updateMessage);
updateButton2.addEventListener('click', updateMessage2);