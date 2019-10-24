var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form')


form.addEventListener('input', function toggleDisableSave(event) {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        console.log('hmm')
        saveBtn.classList.add('save-btn')
        saveBtn.disabled = false;
    } else if (titleInput.value === "" && bodyInput.value === "") {
        saveBtn.classList.remove('save-btn')
    }
})


form.addEventListener('click', addCard);

function addCard() {
  if (event.target.id === 'save-btn') {
    console.log('adding a new card!');
  }
}
