let elem = document.querySelector("#elem");
elem.addEventListener("focus", function () {
    console.log(elem.value);
});