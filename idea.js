class Idea {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.id = Date.now();
        this.starred = false;
    }
    starCard(event) {
        // use individual ID being created for each card
        // use that ID to iterate through the array
        // find which instance contains that ID
        // run starCard() on that instance

        for (var i = 0; i < event.length; i++) {
            if (event[i].id === this.id) {
                this.starred = !this.starred;
            }
        }
    }
    saveToStorage(ideasArr) {
        var stringifiedIdeas = JSON.stringify(ideas);
        localStorage.setItem('ideas', stringifiedIdeas)
        console.log(stringifiedIdeas)
    }


    deleteFromStorage() {

    }
    updateIdea() {

    }

}