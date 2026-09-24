const button = document.querySelector('#swatbutton');
const statusmessages = document.querySelector('#statusmessages');

// const statusmessages = document.querySelector('#statasmessages');
//incorrect query selector for status messages confusing an 'a' with a 'u'
// fixed by correcting the query selector to '#statusmessages' instead of '#statasmessages'
function showStatus() { 
    statusmessages.textContent = 'bug swatted!';
}

button.addEventListener('click', showStatus);

console.log("scriptbug.js loaded successfully");
