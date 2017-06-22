(function() {
    'use strict';

    // import React from 'react';
    // import {
    //     render
    // } from 'react-dom';
    // import {
    //     Provider
    // } from 'react-redux';
    // import store from 'store';
    // import routes from 'routes';
    //
    // render( <
    //     Provider store = {
    //         store
    //     } > {
    //         routes
    //     } < /Provider>,
    //     document.getElementById('react')
    // );

    $('.parallax').parallax();

    $.getJSON('/poses')
        .done((poses) => {
            const $poses = $('#poses');

            for (const pose of poses) {
                const $anchor = $('<a>')
                    .attr({
                        href: `/pose.html?id=${pose.id}`,
                        'data-delay': '50',
                        'data-tooltip': pose.pose_name_sanskrit
                    })
                    .tooltip();

                const $card = $('<div>').addClass('card');
                const $cardImage = $('<div>').addClass('card-image');
                const $col = $('<div>').addClass('col s6 m4 l3');
                const $img = $('<img>').attr({
                    src: pose.pose_name_english,
                    alt: pose.pose_name_sanskrit
                });

                $cardImage.append($img);
                $anchor.append($cardImage);
                $card.append($anchor);
                $col.append($card);
                $poses.append($col);
            }
        })
        .fail(() => {
            Materialize.toast('Unable to retrieve poses', 3000);
        });
})();
