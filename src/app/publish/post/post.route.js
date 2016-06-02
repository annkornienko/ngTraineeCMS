(function() {
  'use strict';

  angular.module('ngtrainee')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider

    .state('posts', {
      url: '/posts',
      templateUrl: 'app/publish/post/posts.html'
    })
    .state('post', {
      url: '/post',
      templateUrl: 'app/publish/publish.html'
    })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true)
  }

})();
