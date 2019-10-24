var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form');
var cardSection = document.querySelector('.card-section');


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
    instaniateNewIdea();
    cardSection.innerHTML += `<div class="card">
        <header>
            <button id="star-btn" type="button" name="star"></button>
            <button id="delete-btn" type="button" name="delete"></button>
        </header>
        <div class="card-body">
            <h2>${titleInput.value}</h2>
            <p id="card-body-p">${bodyInput.value}</p>
        </div>
        <footer class="comment">
            <button id="comment-btn" type="button" name="button"></button>
            <p id="comment">Comment</p>
        </footer>
    </div>`;
    console.log('adding a new card!!');
    if((titleInput !== '') && (bodyInput !== '')) {
      titleInput.value = '';
      bodyInput.value = '';
      toggleDisableSave();
}}

};

function instaniateNewIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value);
  console.log(newCard);
}
