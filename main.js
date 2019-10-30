var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form');
var cardSection = document.querySelector('.card-section');
var ideas = [];

form.addEventListener('input', toggleDisableSave);
cardSection.addEventListener('click', deleteIdeaCard);




// function getFromStorage() {
//     var getIdea = localStorage.getItem('stringArr');
//     var parsedIdeas = JSON.parse(getIdea);
//     console.log(parsedIdeas)
//     if (ideas.length >= 1) {
//       ideas.push(parsedIdeas);
//       console.log(ideas);
//     }
// }
//
// getFromStorage();

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

        idea.saveToStorage(ideas)
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
          <button id='${lastIdea.id * 2}'  class="star-image" type="button" name="star"></button>
          <button id="${lastIdea.id}" class="delete-btn" type="button" name="delete"></button>
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
    if (event.target.classList.contains("star-image")) {
        event.target.classList.toggle('star-image-active');
    }

    var uniqueId = event.target.id;
    for (var i = 0; i < ideas.length; i++) {
        var arrayId = ideas[i].id * 2
        var objId = parseInt(uniqueId)
        console.log(arrayId, objId)
        if (arrayId === objId) {
            ideas[i].starCard()
            ideas[i].saveToStorage(ideas);
        }
    }
}

function deleteIdeaCard(event) {
    if (event.target.className === 'delete-btn') {
        event.target.parentElement.parentElement.remove();
    }
    var uniqueId = event.target.id;
    for (var i = 0; i < ideas.length; i++) {
        var arrayId = ideas[i].id
        var objId = parseInt(uniqueId)
        if (arrayId === objId) {
            ideas.splice(i, 1)
            ideas[i].saveToStorage(ideas);
        }
    }

}
