var app = angular.module('ngtrainee');
app.directive("modalDialogEdit",
function(CategoriesStore, $filter, FBCategories,FBPosts, $firebase,$rootScope, $timeout) {
  return {
    restrict: "E",
    scope: {
      show: "=",
      ctrl: "=ctrlExport"
    },
    replace: true,
    transclude: true,
    controller: 'listPostsCtrl',
    controllerAs: 'ctrl',
//     controller: function($scope, $rootScope){
//     console.log($scope, $scope.myValue);
//     console.log($rootScope.myValue)
//
// },
    link: function(scope, element, attrs) {
      scope.updatePost = function() {
        var a = document.querySelector("#inputHidden").value;
        var title = document.querySelector("#inputTitle").value;
        var text = document.querySelector("[name=name]").value;
        var lastModify =  $filter('date')(new Date(), "yyyy-mm-dd")

        var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts/'+ a);
        var post = $firebase(firebase);
        post.$update({title:title,text:text, lastModify:lastModify}).then(function() {
          scope.show = false;
          console.log("Update" + title);
        },
        function(error) {
          console.log("Error:", error);
        });

      };
      // scope.updatePost = function() {
      //
      //     // var fb = FBPosts.firebase;
      //     var fb = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts' + a);
      //     var post = $firebase(fb);
      //     console.log(a);
      //     fb.on('child_added',
      //     function(snapshot) {
      //       var post1 = $firebase(fb);
      //       var titleFB = snapshot.val();
      //       console.log(titleFB);
      //       titleFB = title;
      //       // scope.editPost = post1.$asArray();
      //     })
      //     }
          //   var
          //   console.log(scope.editPost);
          //     angular.forEach(scope.editPost, function(value,name) {
          //       scope.var = value;
          //       console.log("CVSDn")
          // });
          // post.update({
          //   title: "title",
          //   lastModify: $filter('date')(new Date(), "yyyy-mm-dd")
          //
          // }).then(function(ref) {
          //   console.log(ref.key());
          //   scope.show = false;
          // }, function(error) {
          //   console.log("ERROR");
          // })

        // var b = FBPosts.array.$getRecord(a); // record with $id === "foo" or null
        // console.log(b);
        // var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts');
        // FBPosts.firebase.on('child_changed',
        // function(snapshot) {
        //   var post1 = $firebase(FBPosts.firebase)
        //   scope.editPost1 = post1.$asArray();
        //   console.log(scope.editPost1);
        // });

        // alert(document.querySelector("#inputTitle").value)

      // alert(scope.name);
      //      setTimeout(function(){
      //        alert(scope.name);
      //      });
 //      scope.postToUpdate = "lala"
 //      setTimeout(function()
 // {
 //   console.log(scope.postToUpdate);
 //    scope.$apply()
 // },500)
      scope.dialogStyle = {};
      scope.arr = [];
      if (attrs.width)
      scope.dialogStyle.width = attrs.width;
      if (attrs.height)
      scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
      scope.postToUpdate = [];
      //Get a reference to our categories
      scope.myData = FBCategories.array;
      scope.addCategoryToFB = function() {
        var timestamp = new Date().valueOf();
        // scope.myData.$add({id:timestamp, name:scope.newCategory}).then(function(ref){
        // });
        scope.show = false;
        //  element.bind( "click", function() {
      };
      scope.newCategory = '';
      scope.prefs = CategoriesStore.listCategory;

      //Add new create category to servicу(to display selected)
      scope.addAllCategoryToService = function () {
        if (scope.newCategory.length > 0) {
          console.log(scope.newCategory.length);
          scope.prefs.arrCat.push(scope.newCategory);
          scope.show = false;
          // scope.newCategory = '';
          console.log(scope.newCategory);
          //return scope.lastData;
        }
        else {
          scope.show = false;
        }

      };


      // console.log(scope.editPost);
      // angular.forEach(scope.editPost, function(value,name) {
      //
      //     console.log("CVSDn");
      // })

    },

    templateUrl: 'app/publish/modalDialog/modalDialog.edit.html'
  };
});
