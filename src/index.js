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
    clickButton(b);
  })
);
function clickButton(button) {
  const bid = button.id;
  if (bid === current) {
    return;
  }
  appendContent(bid);
}
function appendContent(b) {
  if (document.querySelector(".water")) {
    document.querySelector(".water").classList.remove("water");
  }
  const active = document.querySelector(`#${b}`);
  active.classList.add("water");
  active.parentElement.append(waterimg);
  if (b === "home") {
    content.append(homeContent);
  } else if (b === "menu") {
    content.append(menuContent);
  } else {
    content.append(aboutContent);
  }
  current = b;
}
appendContent(current);
