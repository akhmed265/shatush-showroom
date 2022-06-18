// Настройка слайдера
if (window.jQuery) {
  const brandSlider = jQuery('.slider');

  jQuery(document).ready(function() {
    jQuery(brandSlider).lightSlider({
        item:1,
        controls: false,
        auto: true,
        loop: true,
    });
  });
}
//  Настройка слайдера End

// menu
const menuToggleBtn = document.querySelector('.page-header__toggle-menu');
const mainMenu = document.querySelector('.main-menu');

menuToggleBtn.addEventListener('click', function() {
  mainMenu.classList.toggle('main-menu__list');
});
// menu end
