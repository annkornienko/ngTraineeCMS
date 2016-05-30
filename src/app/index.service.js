
angular.module("ngtrainee")
.service("CategoriesStore",[ function ($rootScope, $scope) {
  var categories = [];
  this.listCategory = {
    arrCat:[],
    chooseCategories:[],
    addCategoryToService: function (category) {
      console.log(categories);
        categories.push(category);
        return categories;
    },
    getCategory:function(){
      console.log(categories);
      return categories;
    }
  };
// var array = $.map()

//   var categories = [];
//   listCategory.arrCat = ["lala"];
//   console.log(listCategory.arrCat);
//   listCategory.getCategory = function (last) {
//   console.log(last);
//     return last;
// ;
// };
//
// listCategory.addCategoryToService = function (category) {
//   console.log(categories);
//     categories.push(category);
//     return categories;
// };
// return listCategory;
// var service = {
// var categories = [];
//   this.addCategoryToService = function(category) {
//     categories.push(category);
//     // console.log(categories);
//     return categories;
    // return category;
    // alert("saxe")
  //  $scope.$broadcast('categories.update');
    //console.log(service.categories);
//  return service.categories
  //}

// console.log(addCategoryToService());
// }
  // console.log(categories);
  // return categories;
}])
