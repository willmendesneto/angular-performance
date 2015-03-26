'use strict';

/**
 * @ngdoc directive
 * @name angularPerformanceApp.directive:myReactMessage
 * @description
 * # myReactMessage
 */
angular.module('angularPerformanceApp')
  .directive('myReactMessage', function () {

    return {
      compile: function(element) {
       var Hello = React.createClass({
          render: function() {
            return React.DOM.div({}, 'Hello ' + this.props.name);
          }
        });

        return {
          post: function(scope, element) {
            scope.$watch('vm.message', function(newVal, oldVal) {
              React.renderComponent(Hello({
                name: scope.vm.message
              }), document.getElementById('example'));
            });
          }
        }
      }
    }

  });
