let obj = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  for (let index = 0; index < 7; index++) {
    document.write(`${obj[index + 1]}<br>`);
  }