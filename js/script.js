// Настройка слайдера
if (window.jQuery) {
  const brandSlider = jQuery('.brand-detail__slider');

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
const menuToggleBtn = document.querySelector('.header-nav-toggle');
const mainMenu = document.querySelector('.header-nav');

menuToggleBtn.addEventListener('click', function() {
  mainMenu.classList.toggle('header-nav_show');
});
// menu end
