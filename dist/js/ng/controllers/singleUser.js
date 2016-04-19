angular
	.module( 'controllerSingleUser', [
		'ui.router'
	])
	.controller( 'singleUser', singleUser );

singleUser.$inject = [ '$scope', '$http', '$stateParams' ];

function singleUser( $scope, $http, $stateParams ) {

	var vm = $scope;
	if( $stateParams.id === '' ) {
		$http({
			url: 'http://localhost:3000/users',
			method: 'GET',
			dataType: 'json', 
			data: ''
		})
		.success( function ( dane ) {
			var users = dane;
			console.log(users[0].id);
			vm.user = dane[0];
			$stateParams.id = users[0].id;
		}).error( function () {
			console.log( 'Error' );
		});
	}
	else {
		$http({
			url: 'http://localhost:3000/users/' + $stateParams.id,
			method: 'GET',
			dataType: 'json', 
			data: ''
		})
		.success( function ( dane ) {
			vm.user = dane;
		}).error( function () {
			console.log( 'Error' );
		});
	}
	vm.delete = function ( id ) {
		$http({
			url: 'http://localhost:3000/users/' + id,
			method: 'DELETE',
			dataType: 'json', 
			data: '', 
		}).success( function ( dane ) {
			vm.showDeleteAlert = true;
		}).error( function () {
			vm.showErrorAlert = true;
		}); 
	};
}