'use strict';

describe('Filter: myFilter', function () {

  // load the filter's module
  beforeEach(module('angularPerformanceApp'));

  // initialize a new instance of the filter before each test
  var myFilter;
  beforeEach(inject(function ($filter) {
    myFilter = $filter('myFilter');
  }));

  it('should return the input prefixed with "myFilter filter:"', function () {
    var text = 'angularjs';
    expect(myFilter(text)).toBe('myFilter filter: ' + text);
  });

});
