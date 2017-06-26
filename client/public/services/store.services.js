
(function() {
  'use strict'

  angular.module('hibiskiss')
    .service('StoreService', service)
  service.$inject = ['$http']

  function service($http, $stateParams, $state, $filter) {

    this.allItems = function() { // Grabs all items
      return $http.get('/api/store').then(all => all.data)
      console.log("HAYYYY", all.data);
    }
    this.$Item = function(id) { // Grab an item by ID
      return $http.get(`/api/store/${id}`).then(one => one.data)
    }

  }
})();
