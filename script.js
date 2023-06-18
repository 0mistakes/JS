window.onload = function() {
  const input = document.getElementById('input');
  const select = document.getElementById('select');
  
  input.addEventListener('blur', () => {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      select.selectedIndex = value - 1;
    }
  });
  // 2
  const select1 = document.getElementById('weekday-select');
    const today = new Date().getDay();
    const option = select1.querySelector(`option[value="${today}"]`);
    option.selected = true;
  }