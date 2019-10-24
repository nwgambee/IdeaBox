class Idea {
  constructor(title, body) {
    // this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
  }
  isStarred() {
    this.star = true;
  }
}
