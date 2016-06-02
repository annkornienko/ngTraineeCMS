var app = angular.module('ngtrainee');
app.directive("modalDialogChoose",
function(CategoriesStore, FBCategories, $firebase) {
  return {
    restrict: "E",
    scope: {
      show: "=",
      category: "@",
      newCategory: "@",
      listCategory: "@"
    },
    replace: true,
    transclude: true,
    link: function(scope, element, attrs) {
          scope.getCategories = CategoriesStore.listCategory.categories;
          console.log(scope.getCategories);
//       angular.forEach(scope.getCategories, function(value, key) {
//         console.log(value.name );
// })
      scope.dialogStyle = {};
      scope.listAllCategory = [];
      if (attrs.width)
      scope.dialogStyle.width = attrs.width;
      if (attrs.height)
      scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
      scope.selection = [];
      // toggle selection for a given fruit by name
      scope.toggleSelection = function toggleSelection(role) {
        var idx = scope.selection.indexOf(role);
        // is currently selected
        if (idx > -1) {
          scope.selection.splice(idx, 1);
        }
        // is newly selected
        else {
          scope.selection.push(role);
        }
      };
      //Get a reference to our categories
      // var ref = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
      // var sync = $firebase(ref);
      scope.myData = FBCategories.array;
      // // For three-way data bindings, bind it to the scope instead
      // scope.myData.bindTo(scope, "data");
      //Add new categories to our database
      // scope.addCategoryToFB = function() {
      //   scope.myData.$add({id: count(), name:scope.newCategory});
      //   console.log(scope.newCategory);
      //   scope.show = false;
      //   return scope.newCategory;
      //   //  element.bind( "click", function() {
      // };
      scope.newCategory = '';
      scope.prefs = CategoriesStore.listCategory;
      // scope.addCategoryToPage = function () {
      //   //  scope.lastData = scope.newCategory;
      //   scope.prefs.arrCat.push(scope.newCategory);
      //   scope.newCategory = '';
      //   console.log(scope.newCategory);
      //   //return scope.lastData;
      // };
      scope.chooseCategoryToPage = function () {
        scope.show = false;
        console.log(scope.selection);
        //  scope.lastData = scope.newCategory;
        angular.forEach(scope.selection, function(val) {
          scope.prefs.chooseCategories.push(val);
          console.log(val);
        });
      };
      //  Retrieve new categories as they are added to our database
      //  child_added is triggered once for each existing child
      //  and then again every time a new child is added to the specified path
      FBCategories.firebase.on('child_added', function(snapshot) {
        var allCategories = snapshot.val().name;
        var allId = snapshot.key();
        // angular.forEach(allPost, function(value, key) {
        //   $scope.listCategory.push(value.name);
        // scope.allCategories = value.name;
        // console.log(scope.allCategories );
        scope.ex = CategoriesStore.listCategory.categories.push(allCategories);
        // console.log("newPost" + allPost.name);
      })

    },
    templateUrl: 'app/publish/modalDialog/selectCategory.html'
  };
});
