window.onload = function() {
  let ul = document.querySelector('#elem');
  
  ul.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName === 'LI') {
      target.textContent += '!';
    } else if (target.tagName === 'UL') {
      let li = document.createElement('li');
      li.textContent = 'new item';
      ul.appendChild(li);
    }
  });
  }