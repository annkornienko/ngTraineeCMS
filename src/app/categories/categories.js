 var app = angular.module('ngtrainee');
app.controller("CategoriesCtrl",
  function ($scope, $http,$firebase,$timeout,CategoriesStore ) {
  //  $timeout(function () {
        $scope.spinnerShown = true;
  //  }, 5000);
    // $scope.spinnerShown = false;
    // $scope.toggleModal = function() {
    //   $scope.modalShown = !$scope.modalShown;
    // };
    $scope.example = CategoriesStore.listCategory.addCategoryToService("Jaguar");
    // $scope.example = CategoriesStore.addCategoryToService("Jaguar");
    console.log();
    console.log($scope.example);
    $scope.listCategory = [];
    var ref = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
    var sync = $firebase(ref);
    // download the data into a local object
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
      // var syncObject = $firebase(ref);
      syncObject.$loaded()
        .then(function(x) {
          console.log("loaded.record" , syncObject.$id );
          angular.forEach(syncObject, function(value, key) {
            $scope.listCategory.push(value.name);
            //  $timeout(function () {
            $scope.spinnerShown = false;

          // },5000);
          });
          // x === syncObject; // true
        })
        .catch(function(error) {
          console.log("Error:", error);
        });
        syncObject.$bindTo($scope, "data");

    //   ref.on('child_added',
    //    function(snapshot) {
    //      var newPost = snapshot.key();
    //      console.log(sync.id);
    //      console.log(snapshot.key());
    //      $scope.listCategory.push(newPost);
    //      console.log($scope.listCategory);
    //   // $.each(newPost, function(){
    //   //     $scope.listCategory.push(newPost.name);
    //   //     console.error($scope.listCategory);
    //   // })
    // })
    // $scope.listCategory = CategoriesStore.categories;
    //
    // $scope.$on( 'categories.update',
    // function( event ) {
    //   $scope.listCategory = CategoriesStore.categories;
    // });

      // $scope.listCategory = CategoriesStore.categories;
      // $http.get('app/categories/categories.json').success(function(data) {
      // $scope.categories = data;
//  });
});
// /home/ann/ngtrainee/src/assets/images/site.gif
app.directive("spinner", function() {
  return {
    // restrict: 'A',
    transclude:true,
    replace:true,
    scope: {
      show: "="
    },
    link: function(scope,attrs,el) {
      scope.hideSpinner = function(){
        scope.show = false;
        // el.append(-)
      }
    },
    templateUrl: "app/categories/spinner.html"
  }
})
// <div class = 'spinner' ng-show = 'show'>
