(function() {

  'use strict';

  angular
    .module('seed-angular')
    .controller('MainController', MainController);

  function MainController($log) {
    var vm = this;
    vm.name = 'Main controller';

    function initController() {
      $log.debug('Main|init');
    }


    initController();
  }

})();
