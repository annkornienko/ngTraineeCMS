 var app = angular.module('ngtrainee');
app.controller("CategoriesCtrl",
  function ($scope,filterFilter, $http,$firebase,$timeout,CategoriesStore,FBPosts,FBCategories ) {
    // $scope.spinnerShown = true;
    // $scope.example = CategoriesStore.listCategory.getCategory();
    // $scope.listCategory = [];
    $scope.listChooseCategory = [];
    $scope.listPost = [];
    console.log();
    // $scope.list = [];
    // synchronize the object with a three-way data binding
//     $scope.items = FBPosts.firebase;
//         $scope.items.$on('loaded', function() {
//           console.log($scope.items['']); // this writes undefined to console
// });
      FBCategories.firebase.on('child_added',
       function(snapshot) {
         var sync = $firebase(FBCategories.firebase)
         $scope.sync1 = sync.$asArray();
        //  console.log(snapshot.val());
        //  $scope.listCategory.push({newPost,a});
        //  $scope.list.push(a);
        //  console.log($scope.listCategory);
         $scope.spinnerShown = false;
       });


      FBPosts.firebase.on('child_added',
       function(snapshot) {
         var post1 = $firebase(FBPosts.firebase)
         $scope.post = post1.$asArray();
        //  var newPost = snapshot.val();
        //  console.log(newPost.title);
        //  console.log(newPost.categories);
        //  console.log(newPost.categoryKey)
        //  var a = snapshot.key();
        // //  console.log(snapshot.val());
        //  $scope.listPost.push({newPost,a});
        //  console.log($scope.listCategory);

        //  $scope.list.push(a);
        //  console.log($scope.listCategory);
         $scope.spinnerShown = false;
       })


      // $scope.listCategory = CategoriesStore.categories;
      // $http.get('app/categories/categories.json').success(function(data) {
      // $scope.categories = data;
//  });
// CategoriesStore.listCategory.listChooseCategory = "cvbnm";

      $scope.selectedKey = function(category) {
        console.log(category);
        CategoriesStore.listCategory.listChooseCategory = category;

      }
});

app.filter('outputPost' , function(CategoriesStore){
  return function(input){
    var out = [];
    angular.forEach(input, function(key) {
        console.log(key.categories);
        console.log(CategoriesStore.listCategory.listChooseCategory);
      if (key.categories === CategoriesStore.listCategory.listChooseCategory) {
        // console.log(key.newPost.categories);
        out.push(key)
        console.log(out);
      }
    })
    return out;
  }
})
