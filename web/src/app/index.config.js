(function() {
  
  'use strict';

  angular
    .module('seed-angular')
    .config(AppConfig);

  function AppConfig(Env, $mdThemingProvider, $logProvider) {
    $logProvider.debugEnabled(Env.debugLog);

    $mdThemingProvider.theme('default').primaryPalette('light-blue');
  }

})();
