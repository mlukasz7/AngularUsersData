angular
	.module( 'useFormsDirective', [
		'ui.router'
	])
	.directive( 'userForm', userForm );

function userForm() {
  return {
    restrict: 'E',
    templateUrl: 'partials/userForms.html'
  };
}