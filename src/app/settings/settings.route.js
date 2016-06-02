(function() {
  'use strict';

  angular.module('ngtrainee')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
    .state('settings', {
      url: '/settings',
      templateUrl: 'app/settings/settings.html'
    })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true)
  }

})();
