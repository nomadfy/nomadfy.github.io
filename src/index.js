import { guide, destinations } from "./data/explore.json";

const containerGuide = document.querySelector(".explore__components");
const containerDest = document.querySelector(".explore__components--destination");

const buildGuide = (guide) => {
  return `
  <div class="explore__card">
    <img class="explore__image" src="${guide.image}">
    <div class="explore__linear">
      <h3 class="explore__subtitles explore__subtitles--guide">${guide.title}</h3>
      <div class="explore__location">
        <svg class="explore__icon">
          <use xlink:href="#icon-location"></use>
        </svg>
        <h6 class="explore__city" data-city="">${guide.city}</p>
      </div>
    </div>
  </div>
  `;
};

const buildDestination = (destinations) => {
  return `
  <div class="explore__card">
    <img class="explore__image" src="${destinations.image}">
    <div class="explore__linear">
      <h3 class="explore__subtitles explore__subtitles--dest">${destinations.city}</h3>
    </div>
  </div>
`;
};

destinations.forEach((item) => {
  const destination = buildDestination(item);
  
  containerDest.innerHTML = containerDest.innerHTML + destination;
});

guide.forEach((item) => {
  const guide = buildGuide(item);
  const destination = buildDestination(item);

  containerGuide.innerHTML = containerGuide.innerHTML + guide;

});
