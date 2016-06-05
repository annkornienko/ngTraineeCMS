// (function() {
//   'use strict';
//
//   angular
//     .module('ngtrainee')
//     .run(runBlock);
//
//   /** @ngInject */
//   function runBlock($log) {
//
//     $log.debug('runBlock end');
//   }
//
// })();
angular.module('ngtrainee').filter('tel', function (){
  return function() {

  };
});
angular.module('test', []).
run(function($filter) {
 var tel = $filter('tel');
 console.log(tel);
});
