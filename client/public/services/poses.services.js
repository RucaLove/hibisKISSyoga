(function() {
  'use strict'

  angular.module('hibiskiss')
    .service('PosesService', service)

  service.$inject = ['$http']

  function service($http, $stateParams, $state, $filter) {

    this.allPoses = function() { // Grabs all poses
      return $http.get('/api/poses').then(all => all.data)
    }
    this.$Pose = function(id) { // Grab a post by ID
      return $http.get(`/api/poses/${id}`).then(one => one.data)
    }

    //
    // this.newPost = function(newPost) { // Makes new post
    //   $http.post('/posts', newPost)
    //   $state.reload();
    // }
    //
    // this.$del = function(id) { // Removes Post by ID
    //   $http.delete(`/posts/${$stateParams.id}`).then(d => $state.go('app.all'))
    // }

    //
    // this.edit = function(post) { // Patches current Post by ID
    //   $http.patch(`posts/${$stateParams.id}/`, post)
    //   $state.go('app.all')
    // }

  }
})();
