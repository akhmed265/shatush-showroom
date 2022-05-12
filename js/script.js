const brandSlider = jQuery('.brand-detail__slider');

jQuery(document).ready(function() {
  jQuery(brandSlider).lightSlider({
      item:1,
      controls: false,
      auto: true,
      loop: true,
  });
});
