'use strict';

angular.module('searchEngineApp')
 .controller('MovieCtrl', function ($scope, $routeParams) {

   var id = parseInt($routeParams.id , 10);

   var movieList = [{
     id: 23,
     title: 'Brave Hearth',
     image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg4NzA0MTktOGU5ZS00ODlkLWE3ZmQtYjAzNjNmM2E3NmEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
     description: 'When his secret bride is executed for assaulting an English soldier who tried to rape her, Sir William Wallace begins a revolt against King Edward I of England.'
   },
   {
     id: 5,
     title: 'Pulp Fiction',
     image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
     description: 'The lives of two mob hit men, a boxer, a gangsters wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
   },
   {
     id: 42,
     title: 'Fight Club',
     image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
     description: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.'
   }];

   for(var index in movieList){
     var movie = movieList[index];
     if(movie.id === id){
       $scope.movie = movie;
       break;
     }
   }
 });
