(function() {

  'use strict';

  angular
    .module('seed-angular')
    .factory('HttpUtilities', HttpUtilities);

  function HttpUtilities($log, $http, $q) {
    var httpUtilities = {};

    httpUtilities.get = (url) => {
      var deferred = $q.defer();

      $http.get(url)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
          $log.error(err);
        });

      return deferred.promise;
    };

    httpUtilities.post = (url, data) => {
      var deferred = $q.defer();

      $http.post(url, data)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
          $log.error(err);
        });

      return deferred.promise;
    };

    httpUtilities.put = function(url, data) {
      var deferred = $q.defer();

      $http.put(url, data)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
          $log.error(err);
        });

      return deferred.promise;
    };

    httpUtilities.delete = function(url) {
      var deferred = $q.defer();

      $http.delete(url)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(err) {
          deferred.reject(err);
          $log.error(err);
        });

      return deferred.promise;
    };

    return httpUtilities;
  }
})();
