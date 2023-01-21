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
