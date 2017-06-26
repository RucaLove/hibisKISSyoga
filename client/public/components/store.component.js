(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('store', {
      templateUrl: '/templates/store.template.html', // NAV BAR TEMPLATE
      controller: StoreController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  StoreController.$inject = ['$state']

  function StoreController($state) {
    const vm = this
    vm.$onInit = onInit
    // vm.gostore = gostore

    function onInit() {
      // vm.storeShow = false
    }

    // function gostore() {
    //   //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    //   // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
    //   $state.go('store')
    // }

  } // END StoreigationController
}());
