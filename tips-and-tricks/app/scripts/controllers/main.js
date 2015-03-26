'use strict';

/**
 * @ngdoc function
 * @name angularPerformanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPerformanceApp
 */
angular.module('angularPerformanceApp')
  .controller('MainCtrl', function ($scope, $rootScope, $log, $window) {

    this.usingDebounce = true;
    this.usingFilters = true;
    this.usingTrackBy = true;
    this.usingReact = true;
    this.usingOneTimeBinding = true;
    this.count = 0;
    this.message = '';

    this.users = [
      {firstName: 'eu', lastName: 'ea'},
      {firstName: 'William', lastName: 'Wallace'}
    ];

    this.users.map(function(el){
      if (!!$rootScope.debug) {
        $log.log('Using map "userName"!');
      }
      el.username = el.firstName + ' ' + el.lastName;
    });

    this.myModelOptions = {
      updateOn: 'keydown blur',
      debounce: {
          keydown: 250, //for search we don't want to update server during user type
          blur: 250 //when user move on to the next field, we update immedately
      }
    };

    this.myTimer = {
      start: null,
      end: null,
      finalTimer: null
    };

    this.ngRepeatTimerStart = function() {
      $window.console.time('ngRepeatTimer');
      this.myTimer.start = new Date();
      this.usingTrackBy = !this.usingTrackBy;
    };

    this.ngRepeatTimerEnd = function() {
      $window.console.timeEnd('ngRepeatTimer');
      this.myTimer.end = new Date();
      this.myTimer.finalTimer = (this.myTimer.end - this.myTimer.start);
      $log.log('time: ' + this.myTimer.finalTimer + ' - With' + (this.usingTrackBy ? 'out' : '') + ' track by');
    };

    this.init = function(){
    };

    this.init();

  });
