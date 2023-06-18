let divs = document.querySelectorAll("div");
for (let div of divs) {
    div.addEventListener("click", function () {
        this.textContent++;
    });
}