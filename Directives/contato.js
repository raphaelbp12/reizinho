angular.module('App').directive("contato", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function ContatoController($scope, DataService)  {
          $scope.data.tipo = ["CASAMENTO", "FORMATURA", "ANIVERSÁRIO", "CORPORATIVO", "WORKSHOP"];
          $scope.data.precisa = ["BANDA BAILE","DJ", "ORQUESTRA PARA CERIMONIAL","ORQUESTRA PARA RECEPTIVO",
                                  "BOATE","ESTRUTURAS PARA PALCO","ILUMINAÇÃO CÊNICA","SONORIZAÇÃO",
                                  "PAINÉIS LED","EFEITOS ESPECIAIS"];
          $scope.email = {};
          $scope.email.tipo = $scope.data.tipo[0];

          $scope.enviar = function () {
            console.log($scope.email);
            DataService.sendEmail($scope.email);
          }
          $scope.limpar = function () {
            $scope.email = {};
            $scope.email.tipo = $scope.data.tipo[0];
          }
        }],
        templateUrl : 'Sections/contato.html'
    };
}]);
