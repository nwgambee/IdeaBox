var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form');
var ideas = [];
var cardSection = document.querySelector('.card-section')



form.addEventListener('input', toggleDisableSave);
form.addEventListener('click', addCard);


function toggleDisableSave() {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        saveBtn.classList.add('save-btn')
        saveBtn.disabled = false;
    } else {
        saveBtn.classList.remove('save-btn')
        saveBtn.disabled = true;
    }
};


function addCard(event) {
    if (event.target.id === 'save-btn') {
        instantiateIdea();
        displayCard();
        if ((titleInput !== '') && (bodyInput !== '')) {
            titleInput.value = '';
            bodyInput.value = '';
            toggleDisableSave();
        }
    }
}

function instantiateIdea() {
    var newCard = new Idea(titleInput.value, bodyInput.value);
    console.log(newCard)
    ideas.push(newCard)
    console.log(ideas)
}

function displayCard() {
    for (var i = 0; i < ideas.length; i++) {
        var title = ideas[i].title;
        var body = ideas[i].body;
    }
    cardSection.innerHTML += `<div class="card">
        <header>
            <button id="star-btn" type="button" name="star"></button>
            <button id="delete-btn" type="button" name="delete"></button>
        </header>
        <div class="card-body">
            <h2>${title}</h2>
            <p id="card-body-p">${body}</p>
        </div>
        <footer class="comment">
            <button id="comment-btn" type="button" name="button"></button>
            <p id="comment">Comment</p>
        </footer>
        </div>`
}