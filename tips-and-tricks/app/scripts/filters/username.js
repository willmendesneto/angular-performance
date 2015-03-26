'use strict';

/**
 * @ngdoc filter
 * @name angularPerformanceApp.filter:username
 * @function
 * @description
 * # username
 * Filter in the angularPerformanceApp.
 */
angular.module('angularPerformanceApp')
  .filter('userName', function ( $rootScope, $log) {
    return function (input) {
      if (!!$rootScope.debug) {
        $log.log('Filter "userName" active!');
      }
      if (angular.isObject(input) && !!input.firstName && !!input.lastName){
        return input.firstName + ' ' + input.lastName;
      }
      return '';
    };
  });
