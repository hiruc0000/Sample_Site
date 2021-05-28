(() => {
  const toTopButton = document.querySelectorAll('.to-top');

  for (let i = 0; i < toTopButton.length; i++) {
    toTopButton[i].addEventListener('click', () => {
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

})();
