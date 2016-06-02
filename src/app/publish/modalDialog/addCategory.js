var app = angular.module('ngtrainee');
app.directive("modalDialogAdd",
function(CategoriesStore, FBCategories, $firebase) {
  return {
    restrict: "E",
    scope: {
      show: "="
    },
    replace: true,
    transclude: true,
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      scope.arr = [];
      if (attrs.width)
      scope.dialogStyle.width = attrs.width;
      if (attrs.height)
      scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
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
        scope.prefs.arrCat.push(scope.newCategory);
        scope.show = false;
        // scope.newCategory = '';
        console.log(scope.newCategory);
        //return scope.lastData;
      };
    },
    templateUrl: 'app/publish/modalDialog/addCategory.html'
  };
});
