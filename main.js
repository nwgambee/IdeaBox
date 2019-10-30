var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form');
var cardSection = document.querySelector('.card-section');
var ideas = [];
// var starBtn = document.querySelector('.star-image')

// disable save button until forms have content
form.addEventListener('input', toggleDisableSave);

getFromStorage();

function getFromStorage() {
    var getIdea = localStorage.getItem('ideas')
    var parsedIdeas = JSON.parse(getIdea)
    console.log(parsedIdeas)
}

function toggleDisableSave(event) {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        saveBtn.classList.add('save-btn')
        saveBtn.disabled = false;
    } else {
        saveBtn.classList.remove('save-btn')
        saveBtn.disabled = true;
    }
};

form.addEventListener('click', addCard);

function addCard(event) {
    if (event.target.id === 'save-btn') {
        var idea = new Idea(titleInput.value, bodyInput.value);
        ideas.push(idea);
        addIdeaCard();
        // idea.saveToStorage(ideas)

        // reset inputs on 'Save' (could be its own method)
        if ((titleInput !== '') && (bodyInput !== '')) {
            titleInput.value = '';
            bodyInput.value = '';
            toggleDisableSave();
        }
    }
};

function addIdeaCard() {
    var lastIdea = ideas[ideas.length - 1];
    cardSection.innerHTML += `<div id='${lastIdea.id}' class="card">
      <header>
          <button id='${lastIdea.id}'  class="star-image" type="button" name="star"></button>
          <button id="delete-btn" type="button" name="delete"></button>
      </header>
      <div class="card-body">
          <h2>${lastIdea.title}</h2>
          <p id="card-body-p">${lastIdea.body}</p>
      </div>
      <footer class="comment">
          <button id="comment-btn" type="button" name="button"></button>
          <p id="comment">Comment</p>
      </footer>
  </div>`
}

cardSection.addEventListener('click', starIdea);

function starIdea(event) {
    // use bubbling to target the star button on a specific card, and store the ID of that card in a variable.
    // With that variable, access the specific idea instance within the ideas array and run the starCard() method.

    if (event.target.classList.contains("star-image")) {
        event.target.classList.toggle('star-image-active');
    }

    var uniqueId = event.target.id;
    for (var i = 0; i < ideas.length; i++) {
        var arrayId = ideas[i].id
        var objId = parseInt(uniqueId)
        console.log(objId, arrayId)
        if (arrayId === objId) {
            ideas[i].starCard()
        }
    };

    cardSection.addEventListener('click', deleteIdeaCard);
    // Deletes a specific card that is selected from the card section.
}

function deleteIdeaCard(event) {

    if (event.target.attributes.name.nodeValue === 'delete') {
        event.target.parentElement.parentElement.remove();
    }
}