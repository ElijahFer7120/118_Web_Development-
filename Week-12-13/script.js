const riderSearchInput = document.getElementById('rider-search');
const standByMessage = document.getElementById('stand-by');
const searchResults = document.getElementById('search-results');
// const status = document.getElementById('status');
// redundant status element removed

const ridersource = [
    "Ichigo",
    "Geats",
    "Zero-One",
    "Build",
    "Ex-Aid",
    "Kabuto",
    "Fourze",
    "Den-O",
    "Faiz"
];
// <-- added in two new riders to the list and added a debounce timer for filtering -->
let filteredRiders = [];
let debouncetimer = null;


function renderRiders(matchedRiders) {
    searchResults.innerHTML = '';

    for (const rider of matchedRiders) {
        const li = document.createElement('li');
        li.textContent = rider;
        searchResults.appendChild(li);
    }
}

function filterRiders() {
    if (typeof filterRiders.filterRunCount === 'undefined') {
        filterRiders.filterRunCount = 0;
    }
    filterRiders.filterRunCount += 1;
    // const searchTerm = riderSearchInput.value.toLowerCase();
    // removed string to fix any potential input recognition issues
    const matchedRiders = ridersource.filter(isMatch);
    standByMessage.textContent = `Filter run count: ${filterRiders.filterRunCount}`;
    if (matchedRiders.length === 0) {
        // standByMessage.innerHTML += ' No riders found.';
        // innerhtml replaced with textcontent to avoid any HTML injection issues
        standByMessage.textContent += ' No riders found.';
    }
    renderRiders(matchedRiders);
}

function normalize(text) {
    return text.toLowerCase().replace(/[-\s]/g, '');
}

function isMatch(rider) {
    const searchTerm = normalize(riderSearchInput.value);
    return normalize(rider).includes(searchTerm);
}
riderSearchInput.addEventListener('input', function() {
    clearTimeout(debouncetimer);
    debouncetimer = setTimeout(filterRiders, 300);
});

renderRiders(ridersource);