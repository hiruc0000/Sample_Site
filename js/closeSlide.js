(() => {
  const closeButton = document.querySelectorAll('.close-curtains');

  const flexLeft = document.querySelector('.flex-left');
  const flexRight = document.querySelector('.flex-right');

  const appear = document.querySelectorAll('.section');

  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', () => {
      flexLeft.classList.remove('flex-slide-left');
      flexRight.classList.remove('flex-slide-right');

      setTimeout(hideSection, 200);

      function hideSection () {
        appear[i].classList.remove('section-appear');
      }
    });
  }
})();
