const VERSION = "v2";

const btn = document.getElementById("btn");
const count = document.getElementById("count");
const version = document.getElementById("version");

let clicks = 0;

version.textContent = VERSION;

btn.addEventListener("click", () => {
  clicks += 1;
  count.textContent = String(clicks);
});
