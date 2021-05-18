import { data } from "./data/explore.json";

const destinationTitle = document.querySelector("[data-title]");
const destinationCity = document.querySelector("[data-city]");
const destinationCard = document.querySelector("[data-card]");

const writeIn = (id) => {
  destinationTitle.innerHTML = data[1].title;
  destinationCity.innerHTML = data[1].city;
  console.log("aaaaaaaa")
}

window.onload = writeIn
