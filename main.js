var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');

saveBtn.addEventListener('click', createNewCard)

function createNewCard() {
  if((titleInput !== '') && (bodyInput !== '')) {
    //Code to create new card here.
    titleInput.value = '';
    bodyInput.value = '';
  }
}
