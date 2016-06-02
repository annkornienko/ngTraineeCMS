var app = angular.module("ngtrainee");
app.service("FBCategories", ['$firebase',  function ($firebase) {
  var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
  var sync = $firebase(firebase);
  return {
    firebase: firebase,
    all: sync,
    object: sync.$asObject(),  //download the data into a local object
    array: sync.$asArray()  //download the data into a local object
  }
}]);

var app = angular.module("ngtrainee");
app.service("CategoriesStore", [ function($rootScope, $scope) {
  this.listCategory = {
    categories:[],
    arrCat:[],
    chooseCategories:[],
    // addAllCategoryToService: function(category,id) {
    //   console.log(categories);
    //   var category = category;
    //   var id = id;
    //   categories.push({category,id});
    //   return categories;
    // },
    getCategory:function(){
      console.log(categories);
      return categories;
    }

  };
}]);
