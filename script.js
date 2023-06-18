const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

input1.addEventListener('keyup', function() {
  if (this.value.length >= 2) {
    input2.focus();
  }
});

input2.addEventListener('keyup', function() {
  if (this.value.length >= 2) {
    this.blur();
  }
});