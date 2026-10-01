const message = document.querySelector('#message');
const updateButton = document.querySelector('#updatebutton');
const updateButton2 = document.querySelector('#updatebutton2');
const resetButton = document.querySelector('#resetbutton');
// original functions commented out below
// function updateMessage() {
//     message.textContent = "good, now watch MY-TH"
// }
// function updateMessage2() {
//     message.textContent = "Go watch it now!"
// }
// updateButton.addEventListener('click', updateMessage);
// updateButton2.addEventListener('click', updateMessage2);

// new refactored functions below
function updateMessage(text) {
    message.textContent = text;
}

updateButton.addEventListener('click', () => updateMessage("good, now watch MY-TH"));
updateButton2.addEventListener('click', () => updateMessage("Go watch it now!"));

function resetMessage() {
    message.textContent = "click to verify";
}

resetButton.addEventListener('click', resetMessage);