'use strict';

/**
 * @ngdoc directive
 * @name angularPerformanceApp.directive:myMessage
 * @description
 * # myMessage
 */
angular.module('angularPerformanceApp')
  .directive('myMessage', function () {
    return {
      template: '<div>Hello {{vm.message}}</div>',
      restrict: 'A'
    };
  });
