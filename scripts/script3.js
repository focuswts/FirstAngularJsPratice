var app = angular.module("simpleApp", []);

app.controller("simpleController", function($scope) {
  $scope.lugar;
  $scope.listaLugar = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"];

  var pessoa = {
    nome: ""
  };

  $scope.pessoa = pessoa;
  $scope.listaPessoa = [{ nome: "Felipe" }, { nome: "Igor" }, { nome: "Luis" }];
 
 //Debugger serve para ajudar a debugar
 //Faz A Execução pausadamente
  debugger;



  
});
