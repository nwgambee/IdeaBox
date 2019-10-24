var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form');
var cardSection = document.querySelector('.card-section');
var cardData = [];


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
    addNewCard();


    // cardSection.innerHTML += `<div class="card">
    //     <header>
    //         <button id="star-btn" type="button" name="star"></button>
    //         <button id="delete-btn" type="button" name="delete"></button>
    //     </header>
    //     <div class="card-body">
    //         <h2>${titleInput.value}</h2>
    //         <p id="card-body-p">${bodyInput.value}</p>
    //     </div>
    //     <footer class="comment">
    //         <button id="comment-btn" type="button" name="button"></button>
    //         <p id="comment">Comment</p>
    //     </footer>
    // </div>`;
    if((titleInput !== '') && (bodyInput !== '')) {
      titleInput.value = '';
      bodyInput.value = '';
      toggleDisableSave();
}}
};

function instaniateNewIdea() {
  var newCard = new Idea(titleInput.value, bodyInput.value);
  cardData.push(newCard);
  console.log(newCard);
  console.log(cardData);
  return newCard;
}

function addNewCard() {
  cardSection.innerHTML += `<div class="card">
      <header>
          <button id="star-btn" type="button" name="star"></button>
          <button id="delete-btn" type="button" name="delete"></button>
      </header>
      <div class="card-body">
          <h2>${cardData[0].title}</h2>
          <p id="card-body-p">${cardData[0].body}</p>
      </div>
      <footer class="comment">
          <button id="comment-btn" type="button" name="button"></button>
          <p id="comment">Comment</p>
      </footer>
  </div>`
}
