let wrapper = document.querySelector('.wrapper')
wrapper.onclick = function (event) {

    let card = event.target.closest('.card');
    //проверяет произош ли клик вне card
    if (!card) {
        closeAll()
        return;
    }
    if (!wrapper.contains(card)) {
        closeAll()
        return;
    }


    let front = card.children[0];
    let back = card.children[1];


    if (card.classList.contains('pol')) {
        closeMenu(front, back)
        card.classList.toggle('pol')
        return
    }
    if (!card.classList.contains('pol')) {
        closeAll()
        openMenu(card, front, back)
        card.classList.toggle('pol')
    }
};

function openMenu(card, front, back) {

    front.style.transform = 'rotateY(180deg)'
    back.style.transform = 'rotateY(360deg)'
}
function closeMenu(front, back) {
    front.style.transform = 'rotateY(0deg)'
    back.style.transform = 'rotateY(180deg)'

}

function closeAll(){
    [].forEach.call(document.querySelectorAll('.card'), function (e) {
        e.classList.remove('pol')
        e.children[0].style.transform = 'rotateY(0deg)'
        e.children[1].style.transform = 'rotateY(180deg)'
    });
}