const stringRotate = (userString) => {
  userString += " ";
  let userStringArray;
  let lastLetter;
  const rotate = () => {
    userStringArray = userString.split("");
    lastLetter = userStringArray.pop();
    userStringArray.unshift(lastLetter);
    userString = userStringArray.join("");
    console.log(userString);
  };

  setInterval(rotate, 1000);
};

stringRotate("Michee is such a cool guy!");
