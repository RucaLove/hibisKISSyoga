(function() {
  'use strict';

  const poseId = window.QUERY_PARAMETERS.id;

  if (!poseId) {
    window.location.href = '/index.html';
  }

  const renderPose = function(pose) {
    $('#title').text(pose.title);
    $('#author').text(pose.author);
    $('#genre').text(pose.genre);
    $('#description').text(pose.description);
    $('#cover').attr({ src: pose.coverUrl, alt: pose.title });
    $('#editPose').attr('href', `/edit_pose.html?id=${pose.id}`);
  };

  const attachListeners = function(pose) {
    $('#deletePose').click((event) => {
      event.preventDefault();

      $('#deleteModal').openModal();
    });

    $('#confirmDelete').click((event) => {
      event.preventDefault();

      const options = {
        dataType: 'json',
        type: 'DELETE',
        url: `/poses/${pose.id}`
      };

      $.ajax(options)
        .done(() => {
          window.location.href = '/index.html';
        })
        .fail(() => {
          Materialize.toast('Unable to delete pose', 3000);
        });
    });

    $('#addFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ poseId: pose.id }),
        dataType: 'json',
        type: 'POST',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#addFavorite').addClass('hide');
          $('#removeFavorite').removeClass('hide');

          Materialize.toast('Added pose to your favorites', 3000);
        })
        .fail(() => {
          Materialize.toast('Unable to add this pose to your favorites', 3000);
        });
    });

    $('#removeFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ poseId: pose.id }),
        dataType: 'json',
        type: 'DELETE',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#removeFavorite').addClass('hide');
          $('#addFavorite').removeClass('hide');

          Materialize.toast('Removed pose from your favorites', 3000);
        })
        .fail(() => {
          Materialize.toast(
            'Unable to remove this pose from your favorites',
            3000
          );
        });
    });
  };

  $.getJSON(`/poses/${poseId}`)
    .done((pose) => {
      renderPose(pose);
      attachListeners(pose);
    })
    .fail(() => {
      Materialize.toast('Unable to retrieve pose', 3000);
    });

  $.getJSON('/token')
    .done((isLoggedIn) => {
      if (!isLoggedIn) {
        return;
      }

      $.getJSON(`/favorites/check?poseId=${poseId}`)
        .done((isFavorite) => {
          if (isFavorite) {
            $('#removeFavorite').removeClass('hide');
          }
          else {
            $('#addFavorite').removeClass('hide');
          }
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        });
    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    });
})();
