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

    
        const response = await fetch('database.json');
        const Resources = await response.json();

        resourceList.textContent = '';

        for (const resource of Resources) {
            resourceList.appendChild(createResourceCard(resource));
        }
    

}   
loadJsonButton.addEventListener('click', loadResources);