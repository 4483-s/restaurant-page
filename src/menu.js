const content = document.createElement("div");
// import steak1img from "./img/steak1.jpg";
// import steak2img from "./img/steak2.jpg";
// import steak3img from "./img/steak3.jpg";
// import cake1img from "./img/cake1.jpg";
// import burger1img from "./img/burger1.jpg";
// import burger2img from "./img/burger2.jpg";
// import beer1img from "./img/beer1.jpg";
// const steak1 = document.createElement("img");
// const steak2 = document.createElement("img");
// const steak3 = document.createElement("img");
// const cake1 = document.createElement("img");
// const burger1 = document.createElement("img");
// const burger2 = document.createElement("img");
// const beer1 = document.createElement("img");
// steak1.src = steak1img;
// steak2.src = steak2img;
// steak3.src = steak3img;
// cake1.src = cake1img;
// burger1.src = burger1img;
// burger2.src = burger2img;
// beer1.src = beer1img;
const imageNames = [
  "steak1",
  "steak2",
  "steak3",
  "cake1",
  "burger1",
  "burger2",
  "beer1",
];

const images = imageNames.map((name) => {
  const img = document.createElement("img");
  img.src = require(`./img/${name}.jpg`);
  return img;
});
for (let img of images) {
  content.append(img);
}
export default content;
