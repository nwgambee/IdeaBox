var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form');
var cardSection = document.querySelector('.card-section');
var ideas = [];

// disable save button until forms have content
form.addEventListener('input', toggleDisableSave);

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
    cardSection.innerHTML += `<div class="card">
      <header>
          <button id='${lastIdea.id}' class="star-image" type="button" name="star"></button>

  if (event.target.id === 'save-btn') {
    var idea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(idea);
    addIdeaCard();

// reset inputs on 'Save' (could be its own method)
  if((titleInput !== '') && (bodyInput !== '')) {
      titleInput.value = '';
      bodyInput.value = '';
      toggleDisableSave();
  }}
};

function addIdeaCard() {
  var lastIdea = ideas[ideas.length - 1];
  cardSection.innerHTML += `<div class="card">
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

function starIdea() {

    // use bubbling to target the star button on a specific card, and store the ID of that card in a variable.
    // With that variable, access the specific idea instance within the ideas array and run the starCard() method.

  // use bubbling to target the star button on a specific card, and store the ID of that card in a variable.
  // With that variable, access the specific idea instance within the ideas array and run the starCard() method.
}

