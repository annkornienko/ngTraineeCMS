var app = angular.module('ngtrainee');
app.controller('PostCtrl',
function( $scope, CategoriesStore, PostsStore, FBPosts,FBCategories, $filter, $timeout) {
  //assign value from out of the arrays service where kept new category(temporary)
  $scope.getCategoriesToService = CategoriesStore.listCategory.arrCat;
  console.log($scope.getCategoriesToService);
  $scope.chooseCategoriesToService = CategoriesStore.listCategory.chooseCategories;
  console.error($scope.chooseCategoriesToService)
  $scope.modalShownAdd = false;
  $scope.modalShownChoose = false;
  $scope.showNotifySuccess = false;
  $scope.showNotifyFail = false;

  //ani,ation fire and then with timeout(2000) shownotify = false
  $scope.toggleNotify = function(){
    $scope.showNotify = true;
    $timeout(function() {
      $scope.showNotify = false;
    }, 3000);
    console.log("NOTIFY");
    // $scope.showNotify = !$scope.showNotify;
  }
  $scope.toggleModalAdd = function() {
    $scope.modalShownAdd = !$scope.modalShownAdd;
  };
  $scope.toggleModalChoose = function() {
    $scope.modalShownChoose = !$scope.modalShownChoose;
  };
  //action when we click to addCategory out post
  //save created category to service(array)
  // $scope.addCategory = function() {
  //   CategoriesStore.listCategory.addCategoryToService($scope.newCategory);
  //   console.log($scope.newCategory);
  // }
  //ADD POST TO FIREBASE
  // var r = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts');
  // var syn = $firebase(r);

  //Add new categories to FB
  $scope.addNewCategoriesFB = function(ref) {
    $scope.myData = FBCategories.array;
    console.log("WOED");
    // Add new categories to our database
    var timestamp = new Date().valueOf();
    // Creates a new record in the database and adds the record to our local synchronized array.
    //This method returns a promise which is resolved after data has been saved to the server.
    // The promise resolves to the Firebase reference for the newly added record,
    //providing easy access to its key.

    //if created new category execute this code
    if ($scope.getCategoriesToService.length > 0 ){
      console.log($scope.getCategoriesToService);
      $scope.myData.$add({name:CategoriesStore.listCategory.arrCat.toString()}).then(function(ref){
        //console.log("id" + ref.key());
        // console.log($scope.chooseCategoriesToService);
         var title = $scope.postTitle;
         var today = $filter('date')(new Date(), "yyyy-mm-dd");
         var lastModify = $filter('date')(new Date(), "yyyy-mm-dd");

         // $scope.posts = FBPosts.array;
         FBPosts.createPost({title: title, categories:ref.key(), text: $scope.postText, lastModify:lastModify, timeCreate:today});
         $scope.postTitle = "";
         $scope.postText = "";
         // console.log(typeof($scope.getCategoriesToService));
         $scope.getCategoriesToService.length = 0;
         $scope.chooseCategoriesToService.length = 0;
         $scope.showNotifySuccess = true;
         $timeout(function() {
           $scope.showNotifySuccess = false;
         }, 3000);

      // return last;
      });
    }
    else if($scope.chooseCategoriesToService.length > 0) {
      var title = $scope.postTitle;
      var today = $filter('date')(new Date(), "dd-MM-yyyy");
      var lastModify = $filter('date')(new Date(), "dd-MM-yyyy");

      // $scope.posts = FBPosts.array;
      FBPosts.createPost({title: title,categories:CategoriesStore.listCategory.categoryKey.toString(), text: $scope.postText, lastModify:lastModify, timeCreate:today});
      console.log(CategoriesStore.listCategory.categoryKey);
      $scope.postTitle = "";
      $scope.postText = "";
      // console.log(typeof($scope.getCategoriesToService));
      $scope.getCategoriesToService.length = 0;
      $scope.chooseCategoriesToService.length = 0;
      $scope.showNotifySuccess = true;
      $timeout(function() {
        $scope.showNotifySuccess = false;
      }, 3000);

    }
    else {
      $scope.showNotifyFail = true;
      $timeout(function() {
        $scope.showNotifyFail = false;
      }, 3000);
    }
  }
});


  //0667194392
