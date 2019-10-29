class Idea {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.id = Date.now();
        this.starred = false;
    }
    starCard(ideasArr) {
        // use individual ID being created for each card
        // use that ID to iterate through the array
        // find which instance contains that ID
        // run starCard() on that instance

        for (var i = 0; i < ideasArr.length; i++) {
            if (ideasArr[i].id === this.id) {
                console.log(this.id, ideasArr[i].id)
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