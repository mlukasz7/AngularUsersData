var controllerUsers = angular.module('controllerUsers', ['ui.router']);

controllerUsers.controller('users', ['$scope', '$http', '$filter', function($scope, $http, $filter){
	$http({
		url: 'http://localhost:3000/users',
		method: 'GET',
		dataType: 'json', 
		data: ''
	}).success(function(dane){
		$scope.users = dane;
	}).error(function(){
		console.log('Error');
	});
	$scope.delete = function(id, $index){
		$http({
			url: 'http://localhost:3000/users/'+id,
			method: 'DELETE',
			dataType: 'json', 
			data: '',         
		}).success(function(dane){
			$scope.users.splice($index,1);
			console.log('OK');
		}).error(function(){
			console.log('Error');
		}); 
	}
	$scope.hideShow = false;
	$scope.showHideOptions = function(){
		if(!$scope.hideShow) $scope.hideShow = true;
		else  $scope.hideShow = false;
	};
	$scope.sexOptions = [
			{
				value: '',
				name: ''
			},
			{
				value: 'male',
				name: 'male'
			},
			{
				value: 'female',
				name: 'female'
			}
		];
	$scope.eyesOptions = [
		{
			value: '',
			name: ''
		},
		{
			value: 'blue',
			name: 'blue'
		},
		{
			value: 'brown',
			name: 'brown'
		},
		{
			value: 'gray',
			name: 'gray'
		},{
			value: 'green',
			name: 'green'
		}
		];
}]);