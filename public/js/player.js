const body = document.querySelector("body");

const smPlayer = document.getElementById("smPlayer");
const smPlayBtn = document.getElementById("smPlayBtn");
const lgPlayer = document.getElementById("lgPlayer");
const main = document.getElementById("main");

if (!smPlayer.classList.contains("hidden")) {
  main.classList.add("mb-32");
} else {
  main.classList.add("mb-20");
}

smPlayer.addEventListener("click", (event) => {
  if (event.target !== smPlayBtn) {
    smPlayer.classList.add("hidden");
    lgPlayer.classList.remove("hidden");
  }
});

if (!lgPlayer.classList.contains("hidden")) {
  console.log("click");
  document.addEventListener("click", (event) => {
    if (event.target !== lgPlayer) {
      lgPlayer.classList.add("hidden");
    }
    console.log("click", event.target);
  });
}
