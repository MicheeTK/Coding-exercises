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
