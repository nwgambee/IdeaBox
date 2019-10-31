class Idea {
    constructor(title, body, id, starred) {
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
            localStorage.setItem('stringArr', JSON.stringify(allIdeas));
        }
    }

    deleteFromStorage() {

    }
    updateIdea() {

    }

}