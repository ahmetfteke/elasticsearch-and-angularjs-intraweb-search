'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
  .controller('MainCtrl', function ($scope) {
    var movie = {
      title: 'Brave Hearth',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg4NzA0MTktOGU5ZS00ODlkLWE3ZmQtYjAzNjNmM2E3NmEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'When his secret bride is executed for assaulting an English soldier who tried to rape her, Sir William Wallace begins a revolt against King Edward I of England.'
    };
    $scope.movie = movie;
  });
