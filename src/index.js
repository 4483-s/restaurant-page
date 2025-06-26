import "./style.css";
import dripping from "./waterdrip.png";
import homeContent from "./home";
import menuContent from "./menu";
import aboutContent from "./about";
let current = "home";
const waterimg = document.createElement("img");
waterimg.src = dripping;
const content = document.querySelector(".content");
const buttons = document.querySelectorAll(".buttons");
buttons.forEach((b) =>
  b.addEventListener("click", function () {
    if (b.id === current) {
      return;
    }
    appendContent(b.id);
    waterTheme(b);
  })
);

function appendContent(bid) {
  if (content.firstElementChild) {
    content.firstElementChild.remove();
  }
  if (bid === "home") {
    content.append(homeContent);
  } else if (bid === "menu") {
    content.append(menuContent);
  } else {
    content.append(aboutContent);
  }
  current = bid;
}
function waterTheme(b) {
  if (document.querySelector(".water")) {
    document.querySelector(".water").classList.remove("water");
  }
  b.classList.add("water");
  b.parentElement.append(waterimg);
}
appendContent("home");
waterTheme(document.querySelector("#home"));
