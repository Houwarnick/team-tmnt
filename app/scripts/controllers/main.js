'use strict';

angular.module('teamTmntApp')
  .controller('MainCtrl', function ($scope, teams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.teams = teams;
  });
