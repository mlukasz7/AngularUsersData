angular
  .module('app',[
    'ui.router',
    'controllerUsers',
    'controllerNewUser', 
    'controllerEditUser', 
    'controllerSingleUser', 
    'useFormsDirective',
    'navigationTop'
  ])
  .config( config );

function config( $stateProvider, $urlRouterProvider ) {
  $stateProvider
      .state( 'users', {
          url: '/users',
          templateUrl: 'partials/users.html',
          controller: 'users'
      } )
      .state( 'addUser', {
          url: '/user/addUser',
          templateUrl: 'partials/addUser.html',
          controller: 'newUser'
      } )
      .state( 'editUser', {
          url: '/user/editUser/:id',
          templateUrl: 'partials/editUser.html',
          controller: 'editUser'
      } )
      .state( 'singleUser', {
          url: '/user/:id',
          templateUrl: 'partials/singleUser.html',
          controller: 'singleUser'
      } )
  $urlRouterProvider.otherwise( '/users' );
}

