export const openModalinfo = (id) => {
  document.querySelector(`[data-modal-info="${id}"]`).classList.toggle('is-visible');
}
