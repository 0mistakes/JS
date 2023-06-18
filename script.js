window.onload = function() {
  let textarea = document.querySelector('textarea');
  let div = document.querySelector('div');
  
  textarea.addEventListener('input', function() {
      div.textContent = textarea.value;
  });
  // 2
  
    let checkbox = document.querySelector('#checkbox');
    let button = document.querySelector('#button');
    let div1 = document.querySelector('#div');
  
    button.addEventListener('click', function() {
      if (checkbox.checked) {
        div1.textContent = '111';
      } else {
        div1.textContent = '222';
      }
    });
  // 3
  let checkbox1 = document.querySelector('[type="checkbox"]');
    let button1 = document.querySelector('button');
    
    button1.addEventListener('click', function() {
      if (checkbox1.checked) {
        console.log('+++');
      } else {
        console.log('---');
      }
    });
  }