window.onload = function() {
  let elem = document.querySelector('#elem');
  
  elem.addEventListener('click', func);
  elem.addEventListener('dblclick', func);
  function func(event) {
    if (event.type === 'click') {
      event.target.style.backgroundColor = 'green';
    } else if (event.type === 'dblclick') {
      event.target.style.backgroundColor = 'red';
    }
  }
  }