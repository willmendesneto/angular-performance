'use strict';

describe('Directive: myMessage', function () {

  // load the directive's module
  beforeEach(module('angularPerformanceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-message></my-message>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myMessage directive');
  }));
});
