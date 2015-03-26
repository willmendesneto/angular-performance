'use strict';

/**
 * @ngdoc service
 * @name angularPerformanceApp.memoize
 * @description
 * # memoize
 * Service in the angularPerformanceApp.
 */
angular.module('angularPerformanceApp')
  .factory('Memoize', function() {
    function unmemoize() {
      delete this._cache;
    };

    return function(func) {
      if (!angular.isFunction(func)) {
        throw new TypeError;
      }
      var memoized = function() {
        if (!angular.isDefined(memoized._cache)) {
          // memoizing or not.
          memoized._cache = {result: func.apply(this, arguments)};
        }
        return memoized._cache.result;
      }

      memoized.unmemoize = unmemoize;

      return memoized;
    };
  });
