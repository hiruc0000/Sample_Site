(() => {
  const toTopButtons = document.querySelectorAll('.to-top');

  for (let i = 0; i < toTopButtons.length; i++) {
    document.addEventListener('scroll', () => {
      addAppear(toTopButtons[i], 'appear', 500);
    });

    toTopButtons[i].addEventListener('click', () => {
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  function addAppear(element, addClass, pixel) {
  const offset = pageYOffset;

  if (offset > pixel && !element.classList.contains(addClass)) {
    element.classList.add(addClass);
  } else if (offset <= pixel && element.classList.contains(addClass)) {
    element.classList.remove(addClass);
  }
}
})();
