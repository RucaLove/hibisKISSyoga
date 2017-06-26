(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('hibiskiss', {
      templateUrl: '/templates/hibiskiss.template.html', //PARENT TEMPLETE
      controller: HibiskissController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  HibiskissController.$inject = ['HibiskissService', '$stateParams', '$state']

  function HibiskissController(HibiskissService, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    // vm.gohome = gohome
    // vm.splash = splash
    // vm.navigation = navigation

    function onInit() {
      // vm.navShow = false
    }

    // function gohome() {
    //   // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    //   // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
    //   // $state.go('home')
    // }

    // function splash() {
    //   //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
    //   // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
    //   // $state.go('splash')
    // }


  } // END HomeController
}());
