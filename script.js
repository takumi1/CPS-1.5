var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
    },
});

let brandsList = document.querySelector('.brands-list__list');
let brandsItems = document.querySelectorAll('.brands-list__item');
let nextButton = document.querySelector('.description__next-button');
let clickedButton = false;

let setResolution = () => {
    if (window.screen.availWidth >= 768 &&
        window.screen.availWidth < 1120) {
        !clickedButton ? generateItems(6) : generateItems(11);
    } else if (window.screen.availWidth > 1120) {
        !clickedButton ? generateItems(8) : generateItems(11);
    }
}
// setResolution вызывает функцию создания ссылок generateItems
// и передает количество ссылок для отрисовки,
// в зависимости от текущего разрешения и положения кнопки "показать"

let generateItems = (res) => {
    for (let i = 0; i < brandsItems.length; i++) {
        brandsItems[i].classList.add('brands-list__item_hidden');
        brandsList.appendChild(brandsItems[i]);
    }
    for (let i = 0; i < res; i++) {
        brandsItems[i].classList.remove('brands-list__item_hidden');
        brandsList.appendChild(brandsItems[i]);
    }
}
window.addEventListener('resize', function () {
    setResolution();
});
nextButton.addEventListener('click', function () {
    let buttonIcon = document.querySelector('.description__next-button-logo');
    if (!clickedButton) {
        clickedButton = true;
        setResolution();
        document.querySelector('.description__next-button-text').textContent = 'Скрыть';
        buttonIcon.classList.add('description__next-button-logo_revealed');
        nextButton.prepend(buttonIcon);
    } else {
        clickedButton = false;
        setResolution();
        document.querySelector('.description__next-button-text').textContent = 'Показать все';
        buttonIcon.classList.remove('description__next-button-logo_revealed');
        nextButton.prepend(buttonIcon);
    }
});
setResolution();