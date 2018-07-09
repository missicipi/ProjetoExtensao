
var professoresModulo = angular.module('professoresModulo',[]);



professoresModulo.controller("professoresController", function($scope){
    $scope.professores = [
      {codigo:1,nome:'Carlos Eduardo',email:'cadu@iftm.com.br', telefone:'5566-8877'},
      {codigo:2,nome:'Cricia',email:'cricia@iftm.com.br', telefone:'2352-9999'},
    {codigo:3,nome:'Dani Arali',email:'daniarali@iftm.com.br', telefone:'4568-7898'},
    ];
    
    $scope.selecionaProfessor = function(professorSelecionado){
        $scope.professor = professorSelecionado;
    }
    
    $scope.limparCampos = function(){
        $scope.professor="";
        
    }
    
    $scope.salvar = function(){
        $scope.professores.push($scope.professor);
        $scope.limparCampos;
    }
    
     $scope.excluir = function(){
        $scope.professores.splice($scope.professores.indexOf($scope.professor),1);
        $scope.limparCampos;
    }
});