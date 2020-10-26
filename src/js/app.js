const cards = Array.from(document.getElementsByClassName('card'));
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cards[i].classList.toggle('selected');
  });
}
