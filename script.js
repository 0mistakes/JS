window.onload = function() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const monthsSelect = document.getElementById("months");
  const currentMonthOption = monthsSelect.querySelector(`option[value="${currentMonth}"]`);
  currentMonthOption.selected = true;
  }