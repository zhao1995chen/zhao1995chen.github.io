(function () {
  const experience = document.querySelectorAll('.experience');
  const cards = document.querySelectorAll('.card');

  function moveHandler() {}

  function experienceHandler(e) {
    console.log(e);
    const list = e.currentTarget.querySelector('.description ul');
    console.log(list);
    const method = e.type === 'click' ? 'toggle' : 'show';
    list.classList[method]('d-none');
  }
  cards.forEach((card) => {
    card.addEventListener('mousemove', moveHandler);
  });

  experience.forEach((e) => {
    // e.addEventListener('mouseenter', experienceHandler);
    e.addEventListener('click', experienceHandler);
  });
})();
