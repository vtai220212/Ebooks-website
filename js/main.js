const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$(".home__tablist__item");
const panes = $$(".tab__pane");

const tabActive = $(".home__tablist__item.active");
const line = $(".home__tablist .line");

const changeColor = $(".home__tablist__item.active");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".home__tablist__item.active").classList.remove("active");
    $(".tab__pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});



const imgPosition = document.querySelectorAll('.aspect-ratio-169 img')
const imgContainer = document.querySelector('.aspect-ratio-169 ')
let imgNum = imgPosition.length
let index = 0

imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%"
})

function imgSlide() {
  index++
  if (index >= imgNum) { index = 0 }
  imgContainer.style.transform = 'translateX(' + (-index * 100) + '%)'
}
setInterval(imgSlide, 4000)




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Khi kích thước màn hình nhỏ hơn hoặc bằng 768px (thích hợp cho điện thoại),
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // Khi kích thước màn hình nhỏ hơn hoặc bằng 1024px (thích hợp cho máy tính bảng),
    1023: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});





