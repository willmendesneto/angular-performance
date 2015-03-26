'use strict';

describe('Service: contacts', function () {

  // load the service's module
  beforeEach(module('angularPerformanceApp'));

  // instantiate service
  var contacts;
  beforeEach(inject(function (_contacts_) {
    contacts = _contacts_;
  }));

  it('should do something', function () {
    expect(!!contacts).toBe(true);
  });

});
