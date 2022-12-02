let btn = document.getElementById("btn-click");
let app = document.querySelector(".App");

let initialColor = 0;

btn.style.left = "-73px";

let dark = "#292c35";
let light = "#f1f1f1";

btn.addEventListener("click", () => {
    if (initialColor == 0) {
        app.style.background = dark;
        btn.style.left = "73px";
        initialColor = 1;
    } else {
        app.style.background = light;
        btn.style.left = "-73px";
        initialColor = 0;
    }
});
