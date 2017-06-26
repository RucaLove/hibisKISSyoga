
(function() {
  'use strict';
  angular.module('hibiskiss').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
    $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application
      .state({ // 1st STATE (on click in this case)
        name: 'splash',
        url: '/',
        component: 'splash'
      })
      .state({ // main state/component on every page
        name: 'nav',
        url: '/nav',
        component: 'nav'
      })
      // .state({ // 1st STATE (on click in this case)
      //   name: 'main',
      //   url: '/hibiskiss',
      //   component: 'main'
      // })
    .state({ // 1st STATE (on click in this case)
      name: 'yoga',
      url: '/yoga',
      component: 'yoga'
    })
    .state({ // 2nd STATE (on click in this case)
      name: 'ayurveda',
      url: '/ayurveda',
      component: 'ayurveda'
    })
    .state({ // 3rd STATE (on click in this case)
      name: 'store',
      url: '/store',
      component: 'store'
    })
    .state({ // 4th STATE (on click in this case)
      name: 'users',
      url: '/users/:id',
      component: 'users'
    })
    .state({ // 1st STATE (on click in this case)
      name: 'main.poses',
      url: '/poses',
      component: 'poses'
    })
    .state({ // 1st STATE (on click in this case)
      name: 'pose',
      url: '/poses/:id',
      component: 'onePose'
    })
    .state({ // 5th STATE (on click in this case)
      name: 'academy',
      url: '/academy',
      component: 'academy'
    })
    .state({ // 5th STATE (on click in this case)
      name: 'contact',
      url: '/contact',
      component: 'contact'
    })
    .state({ // 5th STATE (on click in this case)
      name: 'dosha',
      url: '/dosha',
      component: 'dosha'
    })
    .state({ // 5th STATE (on click in this case)
      name: 'schedule',
      url: '/schedule',
      component: 'schedule'
    })

  } // END CONFIG FUNCTION
})()
