window.onload = function() {
  const select = document.querySelector('select');
  for (let i = 0; i < select.options.length; i++) {
    const option = select.options[i];
    if (option.selected) {
      option.textContent += '!';
    } else {
      option.textContent += '?';
    }
  }
  // 2
  const mySelect = document.getElementById('mySelect');
  const myButton = document.getElementById('myButton');
  
  myButton.addEventListener('click', () => {
    mySelect.selectedIndex = mySelect.options.length - 1;
  });
  // 3
  const select1 = document.getElementById('mySelect');
  const button = document.getElementById('btn');
  
  button.addEventListener('click', function() {
    const selectedOption = select1.options[select1.selectedIndex];
    alert(selectedOption.textContent);
  });
  // 4
  let select2 = document.getElementById('mySelect');
  let button1 = document.getElementById('myButton');
  
  button1.addEventListener('click', function() {
    let selectedOption = select2.options[select2.selectedIndex];
    selectedOption.textContent += '!';
  });
  }