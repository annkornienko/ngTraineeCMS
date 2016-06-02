var app = angular.module('ngtrainee');
app.service("FBModalDialog", ['$firebase',  function ($firebase) {
  var firebase = new Firebase('https://ngtrainee-kornienko.firebaseio.com/categories');
  var sync = $firebase(firebase);
  return {
    all: sync,
    array: sync.$asObject()  //download the data into a local object
  }
}]);
