const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// --------------------------------Tab detail

const tabDetails = $$(".home__sidebar__item");
const paneDetails = $$(".tab__pane");

const tabDetailActive = $(".home__sidebar__item.active");
const lines = $(".product__sidebar .line");

const changeDetailColor = $(".home__sidebar__item.active");

lines.style.left = tabDetailActive.offsetLeft + "px";
lines.style.width = tabDetailActive.offsetWidth + "px";

tabDetails.forEach((tabDetail, index) => {
    const paneDetail = paneDetails[index];

    tabDetail.onclick = function () {
        $(".home__sidebar__item.active").classList.remove("active");
        $(".tab__pane.active").classList.remove("active");

        lines.style.left = this.offsetLeft + "px";
        lines.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        paneDetail.classList.add("active");

        console.log(tabDetails, paneDetails)
    };
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});