'use strict';

describe('Filter: username', function () {

  // load the filter's module
  beforeEach(module('angularPerformanceApp'));

  // initialize a new instance of the filter before each test
  var username;
  beforeEach(inject(function ($filter) {
    username = $filter('username');
  }));

  it('should return the input prefixed with "username filter:"', function () {
    var text = 'angularjs';
    expect(username(text)).toBe('username filter: ' + text);
  });

});
