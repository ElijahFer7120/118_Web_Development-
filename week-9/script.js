const form = document.querySelector('form');
const showInput = document.querySelector('#show');
const showList = document.querySelector('#show-list');

function addShow(event) {

    event.preventDefault();
    const name = showInput.value;
    if (name === '') return;
    
    const li = document.createElement('li');
    li.textContent = name + ' ';
    li.appendChild(createRemoveShowButton(li));
    
    showList.appendChild(li);
    clearshowinput();
}

function createRemoveShowButton (li) {
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.type = 'button';
    button.addEventListener('click', () => {
        li.remove();
    });
    return button;
}

function clearshowinput() {
    showInput.value = '';
    showInput.focus();
}

form.addEventListener('submit', addShow);