const button = document.getElementById("countbutton");
const status = document.getElementById("status");

function startdelay() {
    status.textContent = "calculating...";

    setTimeout(() => {
        status.textContent = "couldn't calculate now..";
    }, 2000);
}
button.addEventListener("click", startdelay);

