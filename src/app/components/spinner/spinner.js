var app = angular.module('ngtrainee');

app.directive("spinner", function() {
  return {
    // restrict: 'A',
    transclude:true,
    replace:true,
    scope: {
      show: "="
    },
    link: function(scope,attrs,el) {
      console.log("SSSSSSSSSSSSSSSSSSSSSSSS");
      scope.hideSpinner = function(){
        scope.show = false;
      }
    },
    templateUrl: "app/components/spinner/spinner.html"
  }
})
