//Create an object such that a student can dynimacally add a subject.
//The properties are id, name, age, subjects,
//and the addSubject(subject)

//Base program
const student = {
  id: 0,
  name: "student name",
  age: 0,
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  },
};
//Object instant 1
const Peter = {
  id: 227,
  name: "Peter",
  age: 22,
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  },
};

//Object instant 1
const Jeannine = {
  id: 489,
  name: "Jeannine",
  age: 23,
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  },
};

PeterSubjectList = ["Math", "physics", "Chemistry", "Microbiology"];
JeannineSubjectList = ["Math", "physics", "Fluid", "Thermodynamics"];

PeterSubjectList.forEach((subject) => {
  Peter.addSubject(subject);
});

JeannineSubjectList.forEach((subject) => {
  Jeannine.addSubject(subject);
});

console.log(Peter);
console.log(Jeannine);
