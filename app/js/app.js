'use strict';

// Declare app level module which depends on filters, and services
// angular.module('myApp', ['myApp.filters', 'myApp.services',
// 'myApp.directives']).
// angular.module('myApp', [ 'myApp.filters', 'myApp.services',
// 'myApp.directives' ]).config([ '$routeProvider', function($routeProvider) {

angular.module('myApp', []).config([ '$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', { templateUrl : 'partials/home.html', controller : HomeCtrl });
  $routeProvider.when('/publications', { templateUrl : 'partials/publications.html', controller : PublicationListCtrl });
  $routeProvider.when('/contact', { templateUrl : 'partials/contact.html', controller : ContactCtrl });
  $routeProvider.otherwise({ redirectTo : '/home' });
} ]);
