var app = angular
  .module("myModule", [])
  .controller("myController", function($scope) {
    var employees = [
      {
        name: "felipe",
        gender: 1,
        salary: "4000",
        city: "londrina"
      },
      {
        name: "Joao",
        gender: 1,
        salary: "2000",
        city: "londrina"
      },
      {
        name: "laura",
        gender: 2,
        salary: "6000",
        city: "apucarana"
      },
      {
        name: "Luiza",
        gender: 2,
        salary: "6129",
        city: "apucarana"
      }
    ];

    $scope.employees = employees;

    $scope.search = function(item) {
      if ($scope.searchText == undefined) {
        return true;
      } else {
        if (
          item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=
            -1 ||
          item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
        ) {
          return true;
        }
      }
      return false;
    };
  });
