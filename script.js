'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// KEYBOARD EVENT
document.addEventListener('keydown', (e) => {
  // console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
