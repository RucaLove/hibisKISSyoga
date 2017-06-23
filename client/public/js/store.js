(function() {
  'use strict';

  $('.parallax').parallax();

  $.getJSON('/store')
    .done((store) => {
      const $items = $('#store');

      for (const item of store) {
        const $anchor = $('<a>')
          .attr({
            href: `/store.html?id=${item.storeId}`,
            'data-delay': '50',
            'data-tooltip': item.product
          })
          .tooltip();

        const $card = $('<div>').addClass('card');
        const $cardImage = $('<div>').addClass('card-image');
        const $col = $('<div>').addClass('col s6 m4 l3');
        const $img = $('<img>').attr({ src: item.img, alt: item.product });

        $cardImage.append($img);
        $anchor.append($cardImage);
        $card.append($anchor);
        $col.append($card);
        $items.append($col);
      }
    })
    .fail(() => {
      window.location.href = '/store.html';
    });
})();
