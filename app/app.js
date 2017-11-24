'use strict';

// Declare app level module which depends on views, and components
angular.module('TN_App', [
  // 'ngRoute',
  'ui.router',
  'ui.bootstrap',
  'ui.select',
  'TN_App.alfredApp',
  'angularFileUpload',
	'luegg.directives'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/alfredApp');
}]);
