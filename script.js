window.onload = function() {
  const select = document.getElementById("mySelect");
  const paragraph = document.getElementById("myParagraph");
  const button = document.getElementById("myButton");
  
  button.addEventListener("click", function() {
    const selectedOption = select.options[select.selectedIndex].text;
    paragraph.textContent = selectedOption;
  });
  // 2
  const yearSelect = document.getElementById("yearSelect");
    const result = document.getElementById("result");
  
    yearSelect.addEventListener("change", function() {
      const selectedYear = yearSelect.value;
      const isLeapYear = (selectedYear % 4 === 0 && selectedYear % 100 !== 0) || selectedYear % 400 === 0;
      result.textContent = isLeapYear ? `${selectedYear} - високосный год` : `${selectedYear} - не високосный год`;
    });
  //   3
   const daysOfWeek = document.getElementById('daysOfWeek');
    const message = document.getElementById('message');
  
    daysOfWeek.addEventListener('change', () => {
      const selectedDay = daysOfWeek.options[daysOfWeek.selectedIndex].value;
  
      if (selectedDay == 6 || selectedDay == 7) {
        message.textContent = 'Выбран выходной день';
      } else {
        message.textContent = 'Выбран рабочий день';
      }
    });
  }