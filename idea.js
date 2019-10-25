class Idea {
    constructor(title, body) {
      this.title = title;
      this.body = body;
      this.id = Date.now();
      this.starred = false;
    }
    starCard() {
      this.starred = true;
    }
    saveToStorage() {

    }
    deleteFromStorage() {

    }
    updateIdea() {

    }

}
