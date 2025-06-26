import mainimg from "./img/mainimg.jpg";
const content = document.createElement("div");
const img = document.createElement("img");
const homeFirstHalf = document.createElement("div");
const text = document.createElement("p");
const imgDiv = document.createElement("div");
const homeSecondHalf = document.createElement("div");
homeFirstHalf.classList.add("homeFirstHalf");
img.src = mainimg;
img.classList.add("mainimg");
text.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum deserunt autem sit provident, enim inventore corporis, natus sunt ab ipsum sint minima dolores, a aut nulla similique! Ducimus, numquam?";
imgDiv.append(img);
homeFirstHalf.append(imgDiv);
homeFirstHalf.append(text);
content.append(homeFirstHalf);
export default content;
