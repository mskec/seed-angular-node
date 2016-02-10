(function() {
  
  'use strict';

  angular
    .module('seed-angular')
    .config(AppConfig);

  function AppConfig(Env, $logProvider) {
    $logProvider.debugEnabled(Env.debugLog);
  }

})();
