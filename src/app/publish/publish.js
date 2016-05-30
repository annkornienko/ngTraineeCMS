var app = angular.module('ngtrainee');
app.controller('PostCtrl', ['$scope', 'CategoriesStore', '$firebase',
function( $scope, CategoriesStore, $firebase, $timeout) {
  //assign value from out of the arrays service where kept new category(temporary)
  $scope.getCategoriesToService = CategoriesStore.listCategory.arrCat;
  $scope.chooseCategoriesToService = CategoriesStore.listCategory.chooseCategories;
  $scope.modalShownAdd = false;
  $scope.modalShownChoose = false;
  $scope.toggleModalAdd = function() {
    $scope.modalShownAdd = !$scope.modalShownAdd;
  };
  $scope.toggleModalChoose = function() {
    $scope.modalShownChoose = !$scope.modalShownChoose;
  };

  //action when we click to addCategory out post
  //save created category to service(array)
  $scope.addCategory = function() {
    CategoriesStore.listCategory.addCategoryToService($scope.newCategory);
    console.log($scope.newCategory);
  }

}]);

app.directive("addPost",[],
  function() {
    return {
      link: function(scope,element,attrs){

      }
    }
  }
)

app.directive("modalDialogAdd", ['CategoriesStore', '$firebase',
function(CategoriesStore, $firebase) {
  return {
    restrict: "E",
    scope: {
      show: "=",
      // newCategory: "@",
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
      var ref = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
      var sync = $firebase(ref);
      scope.myData = sync.$asArray();
      scope.lastData = "";
      //Add new categories to our database
      // scope.records = $firebase(new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories'));
      scope.addCategoryToFB = function() {
        var timestamp = new Date().valueOf();
        // var count = $index;
        scope.myData.$add({id:new Date().valueOf(), name:scope.newCategory}).then(function(ref){
          var recordUid = ref.key();
          console.log(recordUid);


          //  scope.records[recordUid].id = recordUid;
          scope.myData.$save(recordUid)
        });
        console.log(scope.newCategory);
        scope.show = false;
        return scope.newCategory;
        //  element.bind( "click", function() {
      };
      scope.newCategory = '';
      scope.prefs = CategoriesStore.listCategory;
      scope.addCategoryToPage = function () {
        scope.prefs.arrCat.push(scope.newCategory);
        scope.newCategory = '';
        console.log(scope.newCategory);
        //return scope.lastData;
      };

      //Retrieve new categories as they are added to our database
      //child_added is triggered once for each existing child
      //and then again every time a new child is added to the specified path
      ref.on('child_added', function(snapshot) {
        var newPost = snapshot.val();
        scope.ex = CategoriesStore.listCategory.addCategoryToService(newPost.name);
      })
    },
    templateUrl: 'app/publish/modalDialog.html'
  };
}]);

app.directive("modalDialogChoose", ['CategoriesStore', '$firebase',
function(CategoriesStore, $firebase) {
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


      // scope.selected = {index: null};
      scope.getCategories = CategoriesStore.listCategory.getCategory();

      scope.dialogStyle = {};
      scope.arr = [];
      if (attrs.width)
      scope.dialogStyle.width = attrs.width;
      if (attrs.height)
      scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
      scope.cate = ["hrg", "gf","gfg"];
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
      var ref = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
      var sync = $firebase(ref);
      scope.myData = sync.$asArray();
      // // For three-way data bindings, bind it to the scope instead
      // scope.myData.bindTo(scope, "data");
      //Add new categories to our database
      scope.addCategoryToFB = function() {
        scope.myData.$add({id: count(), name:scope.newCategory});
        console.log(scope.newCategory);
        scope.show = false;
        return scope.newCategory;
        //  element.bind( "click", function() {
      };
      scope.newCategory = '';
      scope.prefs = CategoriesStore.listCategory;
      scope.addCategoryToPage = function () {
        //  scope.lastData = scope.newCategory;
        scope.prefs.arrCat.push(scope.newCategory);
        scope.newCategory = '';
        console.log(scope.newCategory);
        //return scope.lastData;
      };
      scope.chooseCategoryToPage = function () {
        scope.show = false;
        console.log(scope.selection);
        //  scope.lastData = scope.newCategory;
        angular.forEach(scope.selection, function(val) {
          scope.prefs.chooseCategories.push(val);
          console.log(val);
        });
        // scope.newCategory = '';
        // console.log(scope.newCategory);
        //return scope.lastData;
      };

      //Retrieve new categories as they are added to our database
      //child_added is triggered once for each existing child
      //and then again every time a new child is added to the specified path
      // ref.on('child_added', function(snapshot) {
      //   var newPost = snapshot.val();
      //   scope.ex = CategoriesStore.listCategory.addCategoryToService(newPost.name);
      // })

    },
    templateUrl: 'app/publish/modalDialog0.html'
  };
}]);
//0667194392
