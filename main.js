var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('#save-btn');
var form = document.querySelector('.form')


form.addEventListener('keypress', function toggleDisableSave() {
    if (titleInput.value !== "" && bodyInput.value !== "") {
        console.log('hmm')
        saveBtn.classList.add('save-btn')
        saveBtn.disabled = false;
    }
})