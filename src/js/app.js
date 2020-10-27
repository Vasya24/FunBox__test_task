const cards = Array.from(document.getElementsByClassName('card'));


for (let i = 0; i < cards.length; i++) {
  let flavour = cards[i].childNodes[1].childNodes[4].innerHTML
  if (cards[i].classList.contains('disabled')) {
      cards[i].parentElement.childNodes[3].innerHTML = `Печалька, ${flavour} закончился`
    } else if (cards[i].classList.contains('disabled') == false && cards[i].classList.contains('selected') == false) {
      cards[i].parentElement.childNodes[3].innerHTML = `Чего сидишь? Порадуй котэ, <p class="buy">купи</p>`
    };

    function onCardClick() {
      cards[i].classList.toggle('selected');
      if (cards[i].classList.contains('selected') && cards[i].classList.contains('foie-gras') && cards[i].classList.contains('disabled') == false) {
          cards[i].parentElement.childNodes[3].innerHTML = 'Печень утки разварная с артишоками';
        } else if (cards[i].classList.contains('selected') && cards[i].classList.contains('fish') && cards[i].classList.contains('disabled') == false) {
          cards[i].parentElement.childNodes[3].innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка';
        } else if (cards[i].classList.contains('selected') && cards[i].classList.contains('chicken') && cards[i].classList.contains('disabled') == false) {
          cards[i].parentElement.childNodes[3].innerHTML = 'Филе из цыплят с трюфелями в бульоне';
        } else if (cards[i].classList.contains('disabled') == false && cards[i].classList.contains('selected') == false) {
          cards[i].parentElement.childNodes[3].innerHTML = `Чего сидишь? Порадуй котэ, <p class="buy">купи</p>`
        };    
  };

  cards[i].addEventListener('click', onCardClick);

}

let buys = Array.from(document.getElementsByClassName('buy'));
console.log(buys[0].parentNode.parentElement.children[0])
for (let j=0; j<buys.length; j++) {
  function onBuyClick() {
    let card = buys[j].parentNode.parentElement.children[0]
    card.classList.toggle('selected');
    if (card.classList.contains('selected') && card.classList.contains('foie-gras') && card.classList.contains('disabled') == false) {
      card.parentElement.childNodes[3].innerHTML = 'Печень утки разварная с артишоками';
    } else if (card.classList.contains('selected') && card.classList.contains('fish') && card.classList.contains('disabled') == false) {
      card.parentElement.childNodes[3].innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка';
    } else if (card.classList.contains('selected') && card.classList.contains('chicken') && card.classList.contains('disabled') == false) {
      card.parentElement.childNodes[3].innerHTML = 'Филе из цыплят с трюфелями в бульоне';
    } else if (card.classList.contains('disabled') == false && card.classList.contains('selected') == false) {
      card.parentElement.childNodes[3].innerHTML = `Чего сидишь? Порадуй котэ, <p class="buy">купи</p>`
    };   
  }
  buys[j].addEventListener('click', onBuyClick)
}