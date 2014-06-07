'use strict';

angular.module('teamTmntApp')
  .service('TurtleService', function TurtleService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getTeams = function(){
    	var deferred = $q.defer();
    	$http({method: 'GET', url: 'http://tmnt.devmounta.in/team'}).success(function(data) {
      		deferred.resolve(data);
    	});
  			return deferred.promise;
    }
    this.getTeam = function(teamId){
      var deferred = $q.defer();
      $http({method: 'GET', url: 'http://tmnt.devmounta.in/team/'+teamId}).success(function(data) {
          deferred.resolve(data);
      });
        return deferred.promise;
    }

  });
