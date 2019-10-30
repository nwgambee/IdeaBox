class Idea {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.id = Date.now();
        this.starred = false;
    }
    starCard() {
        this.starred = !this.starred
    }

    saveToStorage(allIdeas) {

        for (var i = 0; i < allIdeas.length; i++) {
          var stringifiedArr = JSON.stringify(allIdeas[i]);
          localStorage.setItem('stringArr', JSON.stringify(allIdeas[i]));
        }
        console.log(stringifiedArr)
    }

    deleteFromStorage() {
        //local storage -> remove item

        // localStorage.removeItem('stringArr');
    }
    updateIdea() {

    }

}
