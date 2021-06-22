(function () {
  const cards = document.querySelectorAll('.card');

  function moveHandler() {}

  cards.forEach((card) => {
    card.addEventListener('mousemove', moveHandler);
  });
})();
