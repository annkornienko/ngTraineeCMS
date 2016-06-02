var app = angular.module("ngtrainee");
app.controller("listPostsCtrl",
function($scope, $firebase){
  $scope.listCategory= [];
  var ref = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts');
  var syn = $firebase(ref);
  var syncObject = syn.$asObject();
  syncObject.$loaded()
  .then(function(x) {
    angular.forEach(syncObject, function(value, key) {
      $scope.listCategory.unshift(value);
    });
  })
  .catch(function(error) {
    console.log("Error:", error);
  })
  syncObject.$bindTo($scope, "data");
}
)
