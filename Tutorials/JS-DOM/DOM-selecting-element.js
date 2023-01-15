const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

//...............................................................................

const movieList = document.getElementsByClassName("movie-list");
console.log(movieList[0]);

//...............................................................................

const movies = document.getElementsByTagName("li");
// const movieChoice = movies.slice(3);
// console.log(typeof movies);
console.log(Object.values(movies)[0]);

//...............................................................................

const container = document.querySelector(".fav-movie-container");
console.log(container);

//...............................................................................

const allMovies = document.querySelectorAll("li");
// console.log(typeof allMovies);
for (let value of Object.values(allMovies)) {
  console.log(value.textContent);
}

//...............................................................................

const movieList_2 = document.querySelector(".movie-list");
console.log(movieList_2.innerText); //Same result as with querySelectorAll but no loop needed

//...................MANIPULATING SELECTED ELEMENTS..............................
//Note:In most cases, the JS DOM script overides css and even html styling.

mainHeading.style.color = "brown";
// movieList_2.style.fontWeight = "600";//Doesn't work because the font-weight in css file has higher specificity

Object.values(movies)[0].style.color = "red";
Object.values(movies)[3].style.fontWeight = "600";

for (let value of Object.values(movies)) {
  //Loops are required to make changes to more than one element
  value.style.fontSize = "1.2rem";
}
