'use strict';

var homeController = angular.module('homeController', []);

homeController.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
	
	$http.get('employees/employees.json').success(function(data) {
		$scope.empData = data;
	});

	$scope.results = [];
	
  $scope.findEmployee = function(employeeId, searchLevel) {

	$scope.results.length = 0;  

	angular.forEach($scope.empData, function(value, key) {
		if (value.empId === employeeId && searchLevel === "onlyDetails") {
			$scope.results.push({firstName: value.firstName, lastName:value.lastName});
		}else if(value.empId === employeeId && searchLevel === "onlySalary"){
			$scope.results.push({salary: value.salary});
		}else if(value.empId === employeeId && searchLevel === "both"){
			$scope.results.push({firstName: value.firstName, lastName:value.lastName, salary:value.salary});  
		}
	});	

	if($scope.results.length === 0){
		$scope.results.push({noresult: 'Sorry No Reults Found For Your Search :('});
	}
	

  };

  $scope.clearResults = function(){
	  $scope.results.length = 0;
  }  
  
}]);