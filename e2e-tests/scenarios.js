'use strict';

describe('e2e testing for cts pre screen app', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render home when user navigates to /home', function() {
		element(by.model('employeeId') ).sendKeys("Hi!", protractor.Key.ENTER);
    });

  });



});
