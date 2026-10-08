const button = document.getElementById("countbutton");
const status = document.getElementById("status");

function startdelay() {
    status.textContent = "calculating...";

    setTimeout(() => {
        status.textContent = "couldn't calculate now..";
    }, 5000);
}
function resetStatus() {
    status.textContent = "";
}
button.addEventListener("click", startdelay);
button.addEventListener("dblclick", resetStatus);

