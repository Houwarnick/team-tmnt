'use strict';

angular.module('teamTmntApp')
  .directive('makegreen', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
       // element.text('this is the makegreen directive');
      	element.css({color: 'green'});
      }
    };
  });
