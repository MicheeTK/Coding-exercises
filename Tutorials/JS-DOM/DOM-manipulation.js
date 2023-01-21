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

//.....................Creating Elements........................................
/*Recreating the favourite movie card using JS */
const body = document.querySelector("body");

//Create Elements
const favMovieContainer2 = document.createElement("div.fav-movie-container-2");
const mainHeading2 = document.createElement("h1");
mainHeading2.setAttribute("id", "main-heading-2"); //Id attribute can not be added in one line of code

//beginning of block of code that allows to create an element with properties in one line of code
document.__proto__.customCreateElement = function (tag, attributes) {
  var e = document.createElement(tag);

  for (var a in attributes) e.setAttribute(a, attributes[a]);

  return e;
};
//end of block of code that allows to create an element with properties in one line of code

//Create Elements using the custom method
const movieList2 = document.customCreateElement("ul", { id: "movie-list-2" });
const movie1 = document.customCreateElement("li", { id: "movie-1" });
const movie2 = document.customCreateElement("li", { id: "movie-2" });
const movie3 = document.customCreateElement("li", { id: "movie-3" });
const movie4 = document.customCreateElement("li", { id: "movie-4" });
const movie5 = document.customCreateElement("li", { id: "movie-5" });

//Populate created elements
body.append(favMovieContainer2);
favMovieContainer2.append(mainHeading2);
favMovieContainer2.append(movieList2);
movieList2.append(movie1);
movieList2.append(movie2);
movieList2.append(movie3);
movieList2.append(movie4);
movieList2.append(movie5);

//Add and style content
favMovieContainer2.style.width = "360px";
favMovieContainer2.style.height = "200px";
favMovieContainer2.style.margin = "100px auto";
favMovieContainer2.style.textAlign = "center";
favMovieContainer2.style.display = "flex";
favMovieContainer2.style.flexDirection = "column";
favMovieContainer2.style.border = "2px solid whitesmoke";
favMovieContainer2.style.borderRadius = "10px";

mainHeading2.textContent += "Favourite Movie Franchise--JS";
mainHeading2.style.color = "#fff";
mainHeading2.style.marginBlock = "10px";
mainHeading2.style.fontSize = "22px";

movie1.textContent += "The Matrix";
movie2.textContent += "Star Wars";
movie3.textContent += "Harry Potter";
movie4.textContent += "Lord of the Rings";
movie5.textContent += "Marvel";

const allMoviesStyling = document.querySelectorAll("#movie-list-2 li");
for (let textContent of Object.values(allMoviesStyling)) {
  textContent.style.listStyleType = "none";
  textContent.style.backgroundColor = "whitesmoke";
  textContent.style.borderBottom = "1px solid black";
  textContent.style.marginInline = "15px";
  textContent.style.height = "26px";
  textContent.style.display = "flex";
  textContent.style.justifyContent = "center";
  textContent.style.alignItems = "center";
  textContent.style.fontWeight = "500";
}
