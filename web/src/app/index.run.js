(function() {

  'use strict';

  angular
    .module('seed-angular')
    .run(AppRun);

  function AppRun($log, $rootScope, Env) {
    $log.debug('app run:', Env.name);

    $rootScope.Env = Env;
  }

})();
