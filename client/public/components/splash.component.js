(function() {
  'use strict'

  angular.module('hibiskiss')
    .component('splash', {
      templateUrl: '/templates/splash.template.html', //PARENT TEMPLETE
      controller: SplashController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  SplashController.$inject = ['SplashService', '$stateParams', '$state']

  function SplashController(SplashService, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.gohome = gohome
    vm.splash = splash

    function onInit() {
      // vm.navShow = false
    }

    function gohome() {
      // ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      // $state.go('home')
    }

    function splash() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      // $state.go('splash')
    }


  } // END HomeController
}());
