'use strict';

/**
 * @ngdoc filter
 * @name angularPerformanceApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularPerformanceApp.
 */
angular.module('angularPerformanceApp')
  .filter('myFilter', function ($filter, $rootScope, $log) {
    return function (array, input) {
      if (!!$rootScope.debug) {
        $log.log('Filter "myFilter" active!');
      }
      return $filter('filter')(array, input);
    };
  });
