let list = document.querySelectorAll(".list");
for (let elem of list) {
    elem.addEventListener("click", func);
};
function func() {
    if (Number(this.textContent) < 10) {
        this.textContent = Number(this.textContent) + 1
    } else {
        this.removeEventListener('click', func);
    }
}