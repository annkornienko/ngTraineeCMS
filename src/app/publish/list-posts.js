var app = angular.module("ngtrainee");

app.controller("listPostsCtrl",
function($scope,$rootScope,$firebase,FBPosts,PostsStore,$timeout){
  $scope.name = "AAA";
  $scope.listCategory= [];
  $scope.modalShownAdd = false;
  $scope.toggleModalEdit = function(bla) {
    var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts/'+ bla);
    var post = $firebase(firebase);
    $scope.postToUpdate = post.$asObject();
    $timeout(function() {
      // console.log($scope.postToUpdate.title);
    // #modalView > input
    //*[@id="modalView"]/input
      // PostsStore.postId = $scope.postToUpdate.title;
      document.querySelector("#inputTitle").value = $scope.postToUpdate.title;
      document.querySelector("[name=name]").value = $scope.postToUpdate.text;
      document.querySelector("#inputHidden").value = $scope.postToUpdate.$id;

      // $scope.apply();
    },100);
    console.log(PostsStore.postId);
    $scope.modalShownEdit = !$scope.modalShownEdit;
  };

  $scope.removeRecord = function(value) {
    var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts/'+ value.$id);
    var post = $firebase(firebase);
    post.$remove().then(function() {
      console.log("Delete" + value);
    },
    function(error) {
      console.log("Error:", error);
    });

  };



  // $scope.editRecord = function(value){
  //   var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts/'+ value.$id);
  //   var post = $firebase(firebase);
  //   $scope.postToUpdate = post.$asArray();
  //   $("#edit").modal();
  //
  // }
    $scope.var = "Hello"

  FBPosts.firebase.on('child_added',
  function(snapshot) {
    var post1 = $firebase(FBPosts.firebase)
    $scope.post = post1.$asArray();
  })
}
)
app.run(function($rootScope) {
  $rootScope.myValue = 'name.fam';
})
