const wrapper = document.querySelector('.wrapper')
wrapper.onclick = function (event) {

    let card = event.target.closest('.card');

    //проверка на клик если !card то закрыть все
    if (!card) closeAllCard();
    if (!wrapper.contains(card)) closeAllCard();

    let front = card.children[0];
    let back = card.children[1];

    if (card.classList.contains('card-active')) closeAllCard();
    
    if (!card.classList.contains('card-active')) {
        closeAllCard()
        openMenu(front, back)
        card.classList.add('card-active')
    }
};

function openMenu(front, back) {
    front.style.transform = 'rotateY(180deg)'
    back.style.transform = 'rotateY(360deg)'
}

function closeAllCard() {
    [].forEach.call(document.querySelectorAll('.card'), function (e) {
        e.classList.remove('card-active')
        e.children[0].style.transform = 'rotateY(0deg)'
        e.children[1].style.transform = 'rotateY(180deg)'
    });
}