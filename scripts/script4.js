var app = angular
  .module("myModule", [])
  .controller("myController", function($scope) {
    var technologies = [
      {
        name: "JAVA",
        likes: 0,
        dislikes: 0
      },
      {
        name: "C#",
        likes: 0,
        dislikes: 0
      },
      {
        name: ".NET",
        likes: 0,
        dislikes: 0
      }
    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = function(technology) {
      technology.likes++;
    };

    $scope.incrementDislikes = function(technology) {
      technology.dislikes++;
    };
  });
