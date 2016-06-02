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

    .state('сategories.category', {//nested state [services is the nested state of business state]
      url: "/:name",
      templateUrl: "app/categoriess/categoriesValue.html",
      // controller: "categoriesValueCtrl"
    //  controller: function($scope){
    //    $scope.name = ['Adventure', 'Black', 'Trey'];
    //  }
    })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true)
  }

})();
