const loadJsonButton = document.querySelector('#loadButton');
const resourceList = document.querySelector('#resourceList');

function createResourceCard(resource) {
    const card  =  document.createElement('article');
    card.className = 'card';

    const Rider = document.createElement('h2');
    Rider.textContent = resource.Rider;


    const Era = document.createElement('p');
    Era.textContent = `Era: ${resource.Era}`;


    const Availability  = document.createElement('p');
    Availability.textContent = `Availability: ${resource.Availability}`;


    const Use = document.createElement('p');
    Use.textContent = resource.Use;

    card.append(Rider, Era, Availability, Use);
    return card;
}   


async function loadResources() {
    resourceList.textContent = 'Loading in Riders...';

    try {
        const response = await fetch('database.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const Resources = await response.json();

        resourceList.textContent = '';

        for (const resource of Resources) {
            resourceList.appendChild(createResourceCard(resource));
        }
    } catch (error) {
        // Opening index.html via file:// makes browsers block fetch()
        resourceList.textContent = 'Could not load data. Run this page from a local server (e.g. VS Code Live Server or "python -m http.server"), not by double-clicking the file.';
        console.error(error);
    }
}   
loadJsonButton.addEventListener('click', loadResources);