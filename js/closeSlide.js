(() => {
  const navWrapper = document.querySelector('.nav-wrapper');
  const closeButton = document.querySelectorAll('.close-curtains');

  const flexLeft = document.querySelector('.flex-left');
  const flexRight = document.querySelector('.flex-right');

  const appear = document.querySelectorAll('.section');

  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', () => {
      flexLeft.classList.remove('flex-slide-left');
      flexRight.classList.remove('flex-slide-right');

      navWrapper.classList.remove('z-index-control');

      setTimeout(hideSection, 250);

      function hideSection () {
        appear[i].classList.remove('section-appear');
      }
    });
  }
})();
