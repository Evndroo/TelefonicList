angular.module("listaTelefonica",[])
angular.module("listaTelefonica").controller("TelefonicaCTRL", function($scope){
    $scope.message = "Lista"

    $scope.contatos = JSON.parse(window.localStorage.getItem("contatos")) || [];

    $scope.criterio = 'nome';
    $scope.direcao = true;

    $scope.operadoras = [
        {nome : "Tim", codigo : "41", categoria: "Celular"},
        {nome : "Oi", codigo : "14", categoria: "Celular"},
        {nome : "Vivo", codigo : "15", categoria: "Celular"},
        {nome : "Nextel", codigo : "15", categoria: "Fixo"},
        {nome : "Embratel", codigo : "15", categoria: "Fixo"}
    ];

    $scope.adicionar = function (contato){
        
        $scope.contatos.push(angular.copy(contato));
        window.localStorage.setItem("contatos", JSON.stringify($scope.contatos));
        delete $scope.contato;
        $scope.contatoFrm.$setPristine();
    }
    $scope.apagar = function (contatos){
        $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado) return contato;
        });
        window.localStorage.setItem("contatos", JSON.stringify($scope.contatos));
    }

    $scope.isSelecionado = function(contatos){
        return contatos.some(function (contato){
            return contato.selecionado
        });
    }

    $scope.odernarPor = function(campo){
        $scope.criterio = campo;
        $scope.direcao = !$scope.direcao;
    }


});

$(document).ready(function(){
    $("#Telefone").mask("(99) 99999-9999");
    $("#Telefone").attr("autocomplete", "on");
});