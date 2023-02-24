const rotateString = document.getElementById("rotate-string");

const stringRotate = (userString) => {
  userString += "  ";
  let userStringArray;
  let lastLetter;
  const rotate = () => {
    userStringArray = userString.split("");
    lastLetter = userStringArray.pop();
    userStringArray.unshift(lastLetter);
    userString = userStringArray.join("");
    rotateString.innerHTML = userString;
  };

  setInterval(rotate, 200);
};

stringRotate(
  "Michee is such a cool guy. Well, at least he believes to be a cool guy!"
);
