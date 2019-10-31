class Idea {
    constructor(title, body, id, starred) {
        this.title = title;
        this.body = body;
        this.id = Date.now();
        this.starred = false;
    }
    starCard() {
        this.starred = !this.starred
        console.log('test');
    }

    saveToStorage(allIdeas) {

        for (var i = 0; i < allIdeas.length; i++) {
          // var stringifiedArr = JSON.stringify(allIdeas);
          localStorage.setItem('stringArr', JSON.stringify(allIdeas));
        }
    }

    deleteFromStorage() {
        //local storage -> remove item

        // localStorage.removeItem('stringArr');
    }
    updateIdea() {

    }

}
