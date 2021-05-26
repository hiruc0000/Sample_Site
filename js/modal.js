(() => {
  const modalOpen = document.querySelector('.modal-button');
  const modalCloseButton = document.querySelector('.modal-close-button');

  const modal = document.querySelector('section.about');
  const modalBody = document.querySelector('section.about > .modal-container');

  modalOpenEvent(modalOpen);
  modalCloseEvent(modalCloseButton);
  modalCloseEvent(modal);


  function modalOpenEvent (element) {
    element.addEventListener('click', () => {
        modal.classList.add('modal-open');
    });
  }

  function modalCloseEvent (element) {
    element.addEventListener('click', () => {
      modal.classList.remove('modal-open');
    });

    //イベントの伝達遮断
    modalBody.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
})();
