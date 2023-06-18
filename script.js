let elems = document.querySelectorAll("p");
for (let elem of elems) {
    elem.addEventListener("click", func);
}
function func() {
    this.textContent += '!'
    this.removeEventListener("click", func); 
}