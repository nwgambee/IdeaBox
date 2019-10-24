var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');

//Code snippet to be added to form event listener to clear the input fields once the save btn is clicked.
  if((titleInput !== '') && (bodyInput !== '')) {
    //Code to create new card here.
    titleInput.value = '';
    bodyInput.value = '';
  }
