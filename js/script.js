'use strict'
let wrapper = document.querySelector('.wrapper')
wrapper.onclick = function (event) {

    let card = event.target.closest('.card');

    //проверка на клик если !card то закрыть все карточки
    if (!card) {
        closeAllCard()
        return
    }
    if (!wrapper.contains(card)) {
        closeAllCard()
        return
    }

    //бургер меню 
    if (event.target.closest('.toggle-burger-menu')) {
        toggleBurgerMenu(card)
    } else if (!event.target.closest('.burger-menu')) {
        closeBurgerMenu(card)
    } else if (event.target.closest('#add-and-remove-card')){
        const addCard = event.target.closest('#add-and-remove-card').children[0];
        const removeCard = event.target.closest('#add-and-remove-card').children[1];
        //добавление и удаление карточек из избранных
        if (addCard.className === 'display-none') {
            addCard.classList.toggle('display-none')
            removeCard.classList.toggle('display-none')
        }else if (removeCard.className === 'display-none') {
            addCard.classList.toggle('display-none')
            removeCard.classList.toggle('display-none')
        }
    }

    //взятие у этой карточки 2 стороны
    let front = card.children[0];
    let back = card.children[1];

    // закрытие карточек возможно бесполезная
    // if (card.classList.contains('card-active')) closeAllCard();

    // открытие карточки при том закрытие остальных карточек
    if (!card.classList.contains('card-active')) {
        closeAllCard()
        openMenu(front, back)
        card.classList.add('card-active')
    }
};

//открывает карточку
function openMenu(front, back) {
    front.style.transform = 'rotateY(180deg)'
    back.style.transform = 'rotateY(360deg)'
}

// закрывает карточки
function closeAllCard() {
    [].forEach.call(document.querySelectorAll('.card'), function (e) {
        e.classList.remove('card-active')
        e.children[0].style.transform = 'rotateY(0deg)'
        e.children[1].style.transform = 'rotateY(180deg)'
    });
}

//создание карточек
const conteiner = document.querySelector('.contaener')
let cardContent = `
    <div class="card">
        <div class="front">
            <h3 class="card-name">Работай быстро и продуктивно</h3>
        </div>
        <div class="back">
            <div class="card-back-header">
                <div class="name-after">Автор: <span>Тимофей Бурдаков</span></div>
                <div class="burger-menu">
                    <div class="burger-ico display-none" id="add-and-remove-card">
                        <img id="add-card" src="img/menu/chek.svg" alt="+">
                        <img id="remove-card" class="display-none" src="img/menu/exit.svg" alt="X">
                    </div>
                    <div class="burger-ico display-none" id="burger-menu-share">
                        <img src="img/menu/share.svg" alt="">
                        <div class="menu-share">
                            <a href="#"><img src="img/ico/facebook.svg" alt=""></a>
                            <a href="#"><img src="img/ico/twitter.svg" alt=""></a>
                            <a href="#"><img src="img/ico/vk.svg" alt=""></a>
                            <a href="#"><img src="img/ico/instagram.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="burger-ico display-none"><img src="img/menu/plus.svg" alt=""></div>
                    <div class="burger-ico display-none"><img src="img/menu/minus.svg" alt=""></div>
                    <div class="toggle-burger-menu"><img src="img/menu/menu.svg" alt=""></div>
                </div>
            </div>
            <div class="card-back-content">
                <div class="back-text">
                    Далеко-далеко за словесными горами в стране гласных и согласных живут
                    рыбные тексты. Проектах грамматики над, коварных реторический ведущими переписали последний,
                    домах своего живет свой она рукописи языком семантика, наш собрал прямо все.
                    Одна которое алфавит он рукопись свою, но, решила строчка даже буквоград, прямо продолжил
                    букв образ рукописи свой свое заманивший щеке от всех скатился? Обеспечивает запятой он
                    текстов если, заманивший агентство послушавшись.
                    Безопасную маленький, единственное одна продолжил силуэт коварный снова языком составитель
                    пунктуация приставка использовало родного власти переписывается раз бросил которое заглавных
                    послушавшись. Запятой, напоивший города рукописи курсивных грустный единственное ipsum
                    силуэт!

                </div>
                <div><a href="#" class="card-menu-open">ещё</a></div>
            </div>
        </div>
    </div>
    `

for (let i = 1; i <= 10; i++) {
    conteiner.insertAdjacentHTML('beforeend', cardContent)
}

// открытие и закрытие бургера при клике на бургер меню
function toggleBurgerMenu(e) {
    const nameAfter = e.querySelector('.name-after');
    const burgerMenu = e.querySelector('.burger-menu');

    [].forEach.call(e.querySelectorAll('.burger-ico'), function (f) {
        f.classList.toggle('display-none')
    });

    nameAfter.classList.toggle('display-none');
    burgerMenu.classList.toggle('burger-menu-active');

}
// закрытие бургера 
function closeBurgerMenu(e) {
    const nameAfter = e.querySelector('.name-after');
    const burgerMenu = e.querySelector('.burger-menu');

    [].forEach.call(e.querySelectorAll('.burger-ico'), function (f) {
        f.classList.add('display-none')
    });

    nameAfter.classList.remove('display-none');
    burgerMenu.classList.remove('burger-menu-active');

}
