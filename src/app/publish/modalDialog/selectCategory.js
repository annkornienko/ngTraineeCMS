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
      scope.listCategory = [];
      scope.getCategories = CategoriesStore.listCategory.categories;
      scope.getIdCategories = CategoriesStore.listCategory.categoriesKeys;

      // For design modalDialog
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
      scope.keys = [];
      console.log(scope.selection);


      // toggle selection for a given value by name
      scope.toggleSelection = function(role,id) {
        // var idx = scope.selection.indexOf(role);
        // // is currently selected
        // if (idx > -1) {
        //   scope.selection.splice(idx, 1);
        // }
        // // is newly selected
        // else {
        scope.selection.push(role);
        scope.keys.push(id);
        console.log(role);
      };

      //Get a reference to our categories
      scope.myData = FBCategories.array;
      // // For three-way data bindings, bind it to the scope instead
      scope.newCategory = '';
      scope.prefs = CategoriesStore.listCategory;
      scope.chooseCategoryToPage = function () {
        scope.show = false;
        //send choose category value to service
        angular.forEach(scope.selection, function(val) {
          scope.prefs.chooseCategories.push(val);
          console.log(val);
        });
        //send choose keys to service
        angular.forEach(scope.keys, function(val) {
          scope.prefs.categoryKey.push(val);
          // console.log(val.indexOf());
        });
      };
      /*  Retrieve new categories as they are added to our database
      child_added is triggered once for each existing child
      and then again every time a new child is added to the specified path */

      //For display list categories retrieve their from FB and save in service
      //with name categories and key for future access(otherwise we can`t this sent to FB posts)
      FBCategories.firebase.on('child_added', function(snapshot) {
        var allCategories = snapshot.val().name;
        var allId = snapshot.key();

        //  CategoriesStore.listCategory.obj.allId = allCategories;
        scope.ex = CategoriesStore.listCategory.categories.push({allCategories,allId});
        // CategoriesStore.listCategory.categoriesKeys.push(allId);
      })

    },
    templateUrl: 'app/publish/modalDialog/selectCategory.html'
  };
});
