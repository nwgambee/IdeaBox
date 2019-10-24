var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');



form.addEventListener('input', function toggleDisableSave(event) {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        saveBtn.classList.add('save-btn')
        saveBtn.disabled = false;
    } else {
        saveBtn.classList.remove('save-btn')
        saveBtn.disabled = true;
    }
})


form.addEventListener('click', addCard);

function addCard() {
  if (event.target.id === 'save-btn') {
    console.log('adding a new card!!');
 
//Code snippet to be added to form event listener to clear the input fields once the save btn is clicked.
  if((titleInput !== '') && (bodyInput !== '')) {
    //Code to create new card here.
    titleInput.value = '';
    bodyInput.value = '';

  }
