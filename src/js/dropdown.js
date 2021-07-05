let openedItem;

export function openMainDropdown() {
  document.getElementById('mainDropdown').classList.toggle('is-visible');
}

export const openUserDropdown = (id) => {
  openedItem = document.querySelector(`[data-dropdown-info="${id}"]`);
  openedItem.classList.toggle('is-visible');
}

export const openRoadmapDropdown = (id) => {
  var t = document.querySelector(`[data-roadmap-info="${id}"]`).classList.toggle('is-visible');
}

// document.addEventListener('click', function(event) {
//   var isClickInside = openedItem && openedItem.contains(event.target);
//   console.log(isClickInside)

//   if (!isClickInside) {
//     openedItem.classList.toggle('is-visible');
//   }
// });
