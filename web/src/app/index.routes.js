(function() {

  'use strict';

  angular
    .module('seed-angular')
    .config(routeConfig);

  function routeConfig($locationProvider, $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/main/main.html'
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }

})();
