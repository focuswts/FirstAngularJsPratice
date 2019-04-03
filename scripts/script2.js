var myApp = angular.module("myModule", []);

var myAppController = myApp.controller("myAppController", function($scope) {
  var pessoa = {
    nome: "Felipe",
    sobreNome: "Bagatim",
    idade: "21"
  };

  $scope.pessoa = pessoa;
  $scope.message = "AngularJs Tutorial";

$scope.greenColor = "Verde";

});


var myAppController2 = myApp.controller("myAppController2",function($scope,$rootScope){

$scope.redColor = "Vermelho";
$rootScope.rootScopeColor = "Azul";

});