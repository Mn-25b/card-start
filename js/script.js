'use strict'

const wrapper = document.querySelector('.wrapper')
const conteiner = document.querySelector('.contaener')

let fontSize = 18



//создание карточек
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
            <div class="burger-ico display-none" id="plus-text"><img src="img/menu/plus.svg" alt=""></div>
            <div class="burger-ico display-none" id="minus-text"><img src="img/menu/minus.svg" alt=""></div>
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
for (let i = 1; i <= 11; i++) {
    conteiner.insertAdjacentHTML('beforeend', cardContent)
}

//локика карточек
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

    //взятие у этой карточки 2 стороны
    let front = card.children[0];
    let back = card.children[1];

    // открытие карточки при том закрытие остальных карточек
    if (!card.classList.contains('card-active')) {
        closeAllCard()
        openMenu(front, back)
        card.classList.add('card-active')
    }

    //бургер меню
    burgerMenuCard(card, back)
};

/*/////////////////////////////////////////////////////////////////////////////*/

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

/*/////////////////////////////////////////////////////////////////////////////*/

//бургер меню 
function burgerMenuCard(card, back){
    
    //открытие и закритие меню при нажатии на бургер
    if (event.target.closest('.toggle-burger-menu')) {
        toggleBurgerMenu(card)
        
    // закритие меню при нажатии всне его
    } else if (!event.target.closest('.burger-menu')) {
        closeBurgerMenu(card)

    //при клике добовление и удаление из избранного карточки
    } else if (event.target.closest('#add-and-remove-card')) {
        const addCard = event.target.closest('#add-and-remove-card').children[0];
        const removeCard = event.target.closest('#add-and-remove-card').children[1];
        //добавление и удаление карточек из избранных
        if (addCard.className === 'display-none') {
            addCard.classList.toggle('display-none')
            removeCard.classList.toggle('display-none')
        } else if (removeCard.className === 'display-none') {
            addCard.classList.toggle('display-none')
            removeCard.classList.toggle('display-none')
        }
    }

    //увеличение текста
    increaseFontSize(back)
}

/*/////////////////////////////////////////////////////////////////////////////*/

// открытие и закрытие бургера при клике на бургер
function toggleBurgerMenu(e) {
    const nameAfter = e.querySelector('.name-after');
    const burgerMenu = e.querySelector('.burger-menu');

    [].forEach.call(e.querySelectorAll('.burger-ico'), function (f) {
        f.classList.toggle('display-none')
    });

    nameAfter.classList.toggle('display-none');
    burgerMenu.classList.toggle('burger-menu-active');

}
// закрытие бургера при клике вне его
function closeBurgerMenu(e) {
    const nameAfter = e.querySelector('.name-after');
    const burgerMenu = e.querySelector('.burger-menu');

    [].forEach.call(e.querySelectorAll('.burger-ico'), function (f) {
        f.classList.add('display-none')
    });

    nameAfter.classList.remove('display-none');
    burgerMenu.classList.remove('burger-menu-active');

}

// увеличение и уменьшении размера текста
function increaseFontSize(back) {
    let btnMinus = back.querySelector('#minus-text');
    let btnPlus = back.querySelector('#plus-text');
    btnMinus.onclick = function () {
        if (fontSize === 12) {
            return
        } else {
            --fontSize;
            [].forEach.call(document.querySelectorAll('.back-text'), function (e) {
                e.style.fontSize = `${fontSize}px`
            });
        }


    }
    btnPlus.onclick = function () {
        if (fontSize === 32) {
            return
        }
        else {
            ++fontSize;
            [].forEach.call(document.querySelectorAll('.back-text'), function (e) {
                e.style.fontSize = `${fontSize}px`
            });
        }
    }

}