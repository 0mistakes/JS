window.onload = function() {
  const mySelect = document.getElementById("mySelect");
  const options = mySelect.options;
  
  for (let i = 0; i < options.length; i++) {
    options[i].text += " " + options[i].value;
  }
  }