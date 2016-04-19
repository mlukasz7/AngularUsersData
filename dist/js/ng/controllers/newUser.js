angular
	.module( 'controllerNewUser', [
		'ui.router'
	])
	.controller( 'newUser', newUser );

newUser.$inject = [ '$scope', '$http' ];

function newUser( $scope, $http ) {

	var vm = $scope;
	
	vm.submitForm = function( name, surname, age, sex, eyes, description ){
		$http({
			url: 'http://localhost:3000/users',
			method: 'POST',
			dataType: 'json', 
			data: {
				"name": name,
				"surname": surname,
				"age": age,
				"sex": sex,
				"eyes": eyes,
				"description": description
			}
		})
		.success( function ( data, status, headers, config ) {
			vm.showAddAlert = true;
		} )
		.error( function() {
			vm.showErrorAlert = true;
		} );
	};

	vm.trysubmit = function() {
		vm.submitted = true;
	};

	vm.properName = function( value ) {
		return /^[A-ZŁ]{1}[a-złśćżźąę]{1,}$/.test(value);
	};

	vm.properSurname = function( value ) {
		return /^[A-ZŁ]{1}[a-złśćżźąę]{1,}(\-[A-Z]{1}[a-złśćżźąę]{1,})?$/.test( value );
	};

	vm.improperSings = function( value ) {
		return /[0-9\*\/\?\:\.\^\+\\\+\|!@#$%&()~.]/.test( value );
	};

	vm.empty = function(value) {
		return value==='';
	};

	vm.sexOptions = [
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

	vm.eyesOptions = [
		{
			value: '',
			name: ''
		},
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

}