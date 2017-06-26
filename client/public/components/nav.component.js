(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('navigation', {
      templateUrl: '/templates/nav.template.html', // NAV BAR TEMPLATE
      controller: NavigationController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  NavigationController.$inject = ['$state']

  function NavigationController($state) {
    const vm = this
    vm.$onInit = onInit
    // vm.gonav = gonav

    function onInit() {
      // vm.navShow = false
    }

    // function gonav() {
    //   //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    //   // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
    //   $state.go('nav')
    // }

  } // END NavigationigationController
}());
