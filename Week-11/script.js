const likeBtn = document.getElementById("likebtn");
const dislikeBtn = document.getElementById("dislikebtn");
const likesDisplay = document.getElementById("likesdisplay");
const dislikeDisplay = document.getElementById("dislikesdisplay");
const clrBtn = document.getElementById("clrbtn");

likeBtn.addEventListener("click", addlikes);
dislikeBtn.addEventListener("click", adddislikes);
clrBtn.addEventListener("click", clearCounts);

let likes = 0;
let dislikes = 0;

function likescount() {
    likesDisplay.textContent = ` Likes: ${likes} | Dislikes: ${dislikes} `;
    dislikeDisplay.textContent = ` Dislikes: ${dislikes} `;
}

function addlikes() {
    likes += 1
    likescount();
}

function adddislikes() {
    dislikes += 1;
    likescount();
}

function clearCounts() {
    likes = 0;
    dislikes = 0;
    likescount();
}

function saveCounts() {
    localStorage.setItem("likes", likes);
    localStorage.setItem("dislikes", dislikes);
}
function loadCounts() {
    likes = parseInt(localStorage.getItem("likes")) || 0;
    dislikes = parseInt(localStorage.getItem("dislikes")) || 0;
    likescount();
}

loadCounts();
window.addEventListener("beforeunload", saveCounts);

