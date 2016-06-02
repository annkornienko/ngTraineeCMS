var app = angular.module("ngtrainee");
app.service("PostsStore",[ function ($rootScope, $scope) {
  var posts = [];
  this.listCategory = {

    addPostToService: function (title,text) {
      var title = title;
      var text = text;
      posts.push({title: title,text:text});
      console.log(posts);
      return posts;
    },

    getPosts:function(){
      console.log(posts);
      return posts;
    }
  };
}]);

// var app = angular.module("ngtrainee");
app.service("FBPosts", ['$firebase',  function ($firebase) {
  var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/posts');
  var sync = $firebase(firebase);
  return {
    firebase: firebase,
    all: sync,
    object: sync.$asObject(),  //download the data into a local object
    array: sync.$asArray(),  //download the data into a local object
    createPost:function(value) {
      sync.$asArray().$add(value)
    }
  }
}]);

	// app.factory('FakeAmazonService', function($http, $q) {
	// 	return {
	// 		validateShippingAdddress: function(address) {
	// 			var deferred = $q.defer();
  //       $scope.myData.$add({id:timestamp, name:CategoriesStore.listCategory.arrCat.toString(), tre: "LALA"}).then(function(ref){
	// 				.then(function(resp) {
	// 					deferred.resolve({ success: true, data: resp});
	// 				}),
	// 				function(error) {
	// 					deferred.reject({ success: false, data: error});
	// 				});
	// 			return deferred.promise;
	// 		},
	// 		validateCreditCard : function(creditCard) {
	// 			var deferred = $q.defer();
	// 			$http.post('/api/creditCard/validate', creditCard)
	// 				.success(function(data) {
	// 					deferred.resolve({ isValid: data.success });
	// 				})
	// 				.error(function(error) {
	// 					deferred.reject({isValid: false, reason: error});
	// 				});
  //
	// 			return deferred.promise;
	// 		},
