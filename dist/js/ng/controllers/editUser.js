angular
	.module( 'controllerEditUser', [
		'ui.router'
	])
	.controller( 'editUser', editUser );

editUser.$inject = [ '$scope', '$http', '$stateParams' ];

function editUser( $scope, $http, $stateParams ){

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
		})
		.error( function () {
			console.log( 'Error' );
		});
	} else {
		$http({
			url: 'http://localhost:3000/users/' + $stateParams.id,
			method: 'GET',
			dataType: 'json', 
			data: ''
		})
		.success(function(dane){
			vm.user = dane;
		})
		.error(function(){
			console.log( 'Error' );
		});
	}

	if( $stateParams.id === '' ) $stateParams.id = 0;
	vm.properName = function( value ) {
		return /^[A-ZŁ]{1}[a-złśćżźąę]{1,}$/.test( value );
	};
	vm.properSurname = function( value ) {
		return /^[A-ZŁ]{1}[a-złśćżźąę]{1,}(\-[A-Z]{1}[a-złśćżźąę]{1,})?$/.test( value );
	};
	vm.improperSings = function( value ) {
		return /[0-9\*\/\?\:\.\^\+\\\+\|!@#$%&()~.]/.test( value );
	};
	vm.empty = function( value ) {
		return value === '';
	};
	vm.sexOptions = [
			{
				value: 'male',
				name: 'male'
			},
			{
				value: 'female',
				name: 'female'
			}
		];
	vm.eyesOptions = [
		{
			value: 'black',
			name: 'black'
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
	vm.submitForm = function( name, surname, age, sex, eyes, description ){
		$http({
			url: 'http://localhost:3000/users/' + $stateParams.id,
			method: 'PUT',
			dataType: 'json', 
			data: {
				"id": $stateParams.id,
				"name": name,
				"surname": surname,
				"age": age,
				"sex": sex,
				"eyes": eyes,
				"description": description
			}
		})
		.success(function (data, status, headers, config) {
			vm.showOkAlert = true;
		})
		.error(function(){
			vm.showErrorAlert = true;
		});
	}; // /submit
}