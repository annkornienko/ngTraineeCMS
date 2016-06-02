 var app = angular.module('ngtrainee');
app.controller("CategoriesCtrl",
  function ($scope, $http,$firebase,$timeout,CategoriesStore,FBCategories ) {
    $scope.spinnerShown = true;
    // $scope.example = CategoriesStore.listCategory.getCategory();
    $scope.listCategory = [];
    // synchronize the object with a three-way data binding
      FBCategories.object.$loaded()
        .then(function(x) {
          angular.forEach(FBCategories.object, function(value, key) {
            $scope.listCategory.push(value.name);
            $scope.spinnerShown = false;
          });
        })
        .catch(function(error) {
          console.log("Error:", error);
        });
        // syncObject.$bindTo($scope, "data");
        // var categ = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
        // var post = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts');
        // var catpost = post.child(categ).child("category");
        // catpost.child(snap.key()).once("value", function(){})

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
