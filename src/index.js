import { data } from "./data/explore.json";

const container = document.querySelector(".explore__components");

const buildTemplateHtml = (data) => {
  return `
    <div class="explore__card ${data.imageClass}">
      <div class="explore__linear">
        <h3 class="explore__subtitles" data-title="">${data.title}</h3>
        <div class="explore__location">
          <svg class="explore__icon">
            <use xlink:href="#icon-location"></use>
          </svg>
          <p class="explore__city" data-city="">${data.city}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

data.forEach((item) => {
  const template = buildTemplateHtml(item);
  container.innerHTML = container.innerHTML + template;
});
