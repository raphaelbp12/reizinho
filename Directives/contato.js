angular.module('App').directive("contato", ['DataService', function(DataService) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', function ContatoController($scope, DataService)  {
          $scope.data.tipo = ["CASAMENTO", "FORMATURA", "ANIVERSÁRIO", "CORPORATIVO", "WORKSHOP"];
          $scope.data.precisa = ["BANDA BAILE","DJ", "ORQUESTRA PARA CERIMONIAL","ORQUESTRA PARA RECEPTIVO",
                                  "BOATE","ESTRUTURAS PARA PALCO","ILUMINAÇÃO CÊNICA","SONORIZAÇÃO",
                                  "PAINÉIS LED","EFEITOS ESPECIAIS"];
          $scope.email = {};
          $scope.email.tipo = $scope.data.tipo[0];

          $scope.showForm = true;
          $scope.enviarButton = true;
          $scope.showError = false;
          $scope.showSuccess = false;
          $scope.showLoading = false;

          $scope.enviar = function () {
            $scope.showLoading = true;
            $scope.enviarButton = false;
            DataService.sendEmail($scope.email).then(() => {
              //sucess
              $scope.showForm = $scope.showLoading = false;
              $scope.showSuccess = true;
            },
          () => {
            //fail
            $scope.showForm = $scope.showLoading = false;
            $scope.showError = true;
          });

          }
          $scope.limpar = function () {
            $scope.email = {};
            $scope.email.tipo = $scope.data.tipo[0];
          }
        }],
        templateUrl : 'Sections/contato.html'
    };
}]);
