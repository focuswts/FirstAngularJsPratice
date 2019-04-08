var app = angular
  .module("myModule", [])
  .filter("myGreaterThan", function() {
    return function(listOfValues, greaterThanValue) {
      var list = [];

      for (var x = 0; x < listOfValues.length; x++) {
        if (listOfValues[x] > greaterThanValue) {
          list.push(listOfValues[x]);
        }
      }

      return list;
    };
  })
  .run(function($rootScope) {
    $rootScope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });
