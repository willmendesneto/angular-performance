'use strict';

describe('Service: memoize', function () {

  // load the service's module
  beforeEach(module('angularPerformanceApp'));

  // instantiate service
  var memoize;
  beforeEach(inject(function (_memoize_) {
    memoize = _memoize_;
  }));

  it('should do something', function () {
    expect(!!memoize).toBe(true);
  });

});
