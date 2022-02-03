class Project {
  constructor(title, url, description) {
    this.title = title;
    this.url = url;
    this.description = description;
  }
}

export const projects = [
  new Project(
    "Javascript Trivia",
    "javascripttrivia.herokuapp.com",
    "A project built using React, Node, Express, Firebase and Redux for state management. Authentication differentiates between user/admin privileges as well as between organizations. To register with Admin rights use the following organization code: Igloo-Development, or use the login mentioned above."
  ),
  new Project(
    "Mock Jeopardy",
    "Igloo-jeopardy.herokuapp.com",
    "A game built to simulate jeopardy using React, Node, and Express with React Bootstrap for styling and the context API for state management. Game accepts questions entered by users which are shared across users, and randomized according to point value and category. Master password to register: IglooDevelopment or use the login above."
  ),
];
