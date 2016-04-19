angular
	.module( 'navigationTop', [
		'ui.router'
	])
	.directive( 'siteNav', siteNav );

function siteNav() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  };
}