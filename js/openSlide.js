(() => {
  const openTrigger = document.querySelectorAll('a[href^="#"]');
  const flexLeft = document.querySelector('.flex-left');
  const flexRight = document.querySelector('.flex-right');

  for (let i = 0; i < openTrigger.length; i++) {
   openTrigger[i].addEventListener('click', (e) => {
     e.preventDefault();

     const href = openTrigger[i].getAttribute('href');
     const targetSection = document.querySelector(href);
     targetSection.classList.add('section-appear');

     flexLeft.classList.add('flex-slide-left');
     flexRight.classList.add('flex-slide-right');
   });
 }
})();
