window.onload = function() {
  let elem = document.getElementById('elem');
  
  document.addEventListener('mousemove', function(event) {
      elem.innerHTML = event.clientX + ' : ' + 
          event.clientY; 
  });
  }