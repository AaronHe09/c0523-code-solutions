const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal-container');

openModal.addEventListener('click', function () {
  modalContainer.style.display = 'flex';
});

closeModal.addEventListener('click', function () {
  modalContainer.style.display = 'none';
});
