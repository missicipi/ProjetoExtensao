
var cursosModulo = angular.module('cursosModulo',[]);



cursosModulo.controller("cursoController", function($scope){
    $scope.cursos = [
      {codigo:1,nome:'Análise de Sistemas',diashorarios:'Segunda a Sexta a noite', professor:{codigo:1,nome:'Carlos Eduardo',email:'cadu@iftm.com.br', telefone:'5566-8877'}},
      {codigo:2,nome:'Redes de Computadores',diashorarios:'Segunda a Sexta a noite', professor:{codigo:2,nome:'Cricia',email:'cricia@iftm.com.br', telefone:'2352-9999'}},
    {codigo:3,nome:'Sistemas',diashorarios:'Segunda a Sexta manha', professor:{codigo:3,nome:'Dani Arali',email:'daniarali@iftm.com.br', telefone:'4568-7898'}},
    ];
    
    
    $scope.professores = [
      {codigo:1,nome:'Carlos Eduardo',email:'cadu@iftm.com.br', telefone:'5566-8877'},
      {codigo:2,nome:'Cricia',email:'cricia@iftm.com.br', telefone:'2352-9999'},
    {codigo:3,nome:'Dani Arali',email:'daniarali@iftm.com.br', telefone:'4568-7898'},
    ];
    
    $scope.selecionaCurso = function(cursoSelecionado){
        $scope.curso = cursoSelecionado;
    }
    
    $scope.limparCampos = function(){
        $scope.curso="";
        
    }
    
    $scope.salvar = function(){
        $scope.cursos.push($scope.curso);
        $scope.limparCampos;
    }
    
     $scope.excluir = function(){
        $scope.cursos.splice($scope.cursos.indexOf($scope.curso),1);
        $scope.limparCampos;
    }
});