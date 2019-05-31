document.querySelector(".article__header").textContent = "Welcome to Amber's blog";

var headers = document.querySelectorAll(".article__header");
for (let i=0; i < headers.length; i++) {
    headers[i].classList.add("important");
}

document.querySelector(".dashed").classList.remove("dashed");

document.querySelector(".article__footer").classList.add("goldenrod");
