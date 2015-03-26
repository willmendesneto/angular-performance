'use strict';

describe('Directive: myReactMessage', function () {

  // load the directive's module
  beforeEach(module('angularPerformanceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-react-message></my-react-message>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myReactMessage directive');
  }));
});
