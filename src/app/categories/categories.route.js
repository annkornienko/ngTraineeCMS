(function() {
  'use strict';

  angular.module('ngtrainee')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider

    .state('categories', {
      url: '/categories',
      templateUrl: 'app/categories/categories.html',
      controller: 'CategoriesCtrl'
    })

    .state('сategoryDetail', {//nested state [services is the nested state of business state]
      url: "/category/:partyID",
      templateUrl: "app/categories/category.post.html",
      // controller: function($scope, $stateParams) {
      //   // get the id
      //   $scope.id = $stateParams.partyID;
      //
      //   // get the location
      //   // $scope.location = $stateParams.partyLocation;
      // }
      //  controller: function($scope){
      //  var name = ['Adventure', 'Black', 'Trey']
      //  }
    })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true)
  }

})();
