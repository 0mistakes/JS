function checkDate(year, month, day) {
  if (
      new Date(year, month, day).getFullYear() == year &&
      new Date(year, month, day).getMonth() == month &&
      new Date(year, month, day).getDate() == day
  ) {
      return true;
  } else {
      return false;
  }
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));