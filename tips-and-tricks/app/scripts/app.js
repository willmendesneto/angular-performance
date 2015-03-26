'use strict';

/**
 * @ngdoc overview
 * @name angularPerformanceApp
 * @description
 * # angularPerformanceApp
 *
 * Main module of the application.
 */
angular
  .module('angularPerformanceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope){
    $rootScope.debug = true;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/filters', {
        templateUrl: 'views/filters.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/debounce', {
        templateUrl: 'views/debounce.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/scope-events', {
        templateUrl: 'views/scope-events.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/ng-react', {
        templateUrl: 'views/ng-react.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/ng-repeat', {
        templateUrl: 'views/ng-repeat.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
