//According to a technical defiition found online, a leap Year is divisible by 4 and not divisible
//by 100.Or it's divible by 400.

const leapYear = (year) => {
  const isLeapYear = (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0;
  isLeapYear ? console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`);
};

leapYear(2196);
