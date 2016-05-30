// angular.module('ngtrainee',['ngResource', 'ui.router', 'ui.bootstrap']);
var app = angular.module('ngtrainee');

app.controller('HeaderCtrl',['$scope', '$firebase',
  function($scope, $firebase) {
  $scope.tab = 1;

  $scope.selectTab = function(setTab) {
    $scope.tab = setTab;
  }
  $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
  }
}])

// app.controller("CategoriesCtrl", function ($scope, $http, CategoriesStore) {
//   $scope.category_name = CategoriesStore;
//   $http.get('app/categories/categories.json').success(function(data) {
//     $scope.categories = data;
//
//   });
// })
