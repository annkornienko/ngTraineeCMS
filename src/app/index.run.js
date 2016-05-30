(function() {
  'use strict';

  angular
    .module('ngtrainee')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
