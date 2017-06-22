(function() {
  'use strict';

  const poseId = window.QUERY_PARAMETERS.id;

  if (!poseId) {
    window.location.href = '/poses.html';
  }

  const renderPose = function(pose) {
    $('#pose_name_english').val(poses.pose_name_english);
    $('#author').val(poses.author);
    $('#genre').val(poses.genre);
    $('#description').text(poses.description);
    $('#cover').val(poses.coverUrl);
    $('#cancel').attr('href', `/poses.html?id=${poses.id}`);

    Materialize.updateTextFields();
  };

  const attachListeners = function(pose) {
    // eslint-disable-next-line max-statements
    $('#editPoseForm').submit((event) => {
      event.preventDefault();

      const pose_name_english = $('#pose_name_english').val().trim();
      const author = $('#author').val().trim();
      const genre = $('#genre').val().trim();
      const description = $('#description').val().trim();
      const coverUrl = $('#cover').val().trim();

      if (!title) {
        return Materialize.toast('Pose name must not be blank', 3000);
      }

      if (!author) {
        return Materialize.toast('Author must not be blank', 3000);
      }

      if (!genre) {
        return Materialize.toast('Genre must not be blank', 3000);
      }

      if (!description) {
        return Materialize.toast('Description must not be blank', 3000);
      }

      if (!coverUrl) {
        return Materialize.toast('Cover URL must not be blank', 3000);
      }

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ pose_name_english, author, genre, description, coverUrl }),
        dataType: 'json',
        type: 'PATCH',
        url: `/poses/${pose.id}`
      };

      $.ajax(options)
        .done(() => {
          window.location.href = `/poses.html?id=${pose.id}`;
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
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
})();
