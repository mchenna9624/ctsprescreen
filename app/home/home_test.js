'use strict';

describe('Unit: Testing Home Controller', function() {

  describe('homeController', function() {
    var scope, httpBackend;

    beforeEach(module('ctsPreScreenApp'));

    beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
		
    httpBackend = _$httpBackend_;
    httpBackend.when('GET', 'employees/employees.json').respond([ {
        "empId": "123456", 
        "firstName": "Madhu", 
        "lastName": "Chenna", 
        "salary": "$150,000" 
    },
    {
        "empId": "123457", 
        "firstName": "Chiranjeevi", 
        "lastName": "Konidela", 
        "salary": "$3,000,000" 
    },
    {
        "empId": "123458", 
        "firstName": "Sachin", 
        "lastName": "Tendulkar", 
        "salary": "$9,150,000" 
    }]);
	
	scope = $rootScope.$new();
    $controller('HomeCtrl', {$scope: scope});
    }));

    it('should have empty results', function() {
      expect(scope.results.length).toBe(0);
    });
	
    it('should fetch list of employees', function(){
        httpBackend.flush();
        expect(scope.empData.length).toBe(3);
        expect(scope.empData[0].firstName).toBe('Madhu');
    });
	
	it('should return searched employee result', function(){
		httpBackend.flush();
		scope.findEmployee('123456', 'both');
		expect(scope.results.length).toBe(1);
	});
	
  });
});