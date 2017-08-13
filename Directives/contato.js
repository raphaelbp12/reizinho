angular.module('App').directive("contato", ['DataService', 'NgMap', function (DataService, NgMap) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'NgMap', function ContatoController($scope, DataService, NgMap) {
            $scope.data.tipo = ["CASAMENTO", "FORMATURA", "ANIVERSÁRIO", "CORPORATIVO", "WORKSHOP"];
            $scope.data.precisa = ["BANDA BAILE", "DJ", "ORQUESTRA PARA CERIMONIAL", "ORQUESTRA PARA RECEPTIVO",
                "BOATE", "ESTRUTURAS PARA PALCO", "ILUMINAÇÃO CÊNICA", "SONORIZAÇÃO",
                "PAINÉIS LED", "EFEITOS ESPECIAIS"];
            $scope.email = {};
            $scope.email.tipo = $scope.data.tipo[0];

            $scope.showForm = true;
            $scope.enviarButton = true;
            $scope.showError = false;
            $scope.showSuccess = false;
            $scope.showLoading = false;

            NgMap.getMap().then(function (map) {
                console.log(map.getCenter());
                console.log('markers', map.markers);
                console.log('shapes', map.shapes);
            });

            $scope.enviar = function () {
                $scope.showLoading = true;
                $scope.enviarButton = false;
                DataService.sendEmail($scope.email).then(function () {
                    $scope.showForm = $scope.showLoading = false;
                    $scope.showSuccess = true;

                }, function () {
                    //fail
                    $scope.showForm = $scope.showLoading = false;
                    $scope.showError = true;
                })};

                $scope.limpar = function () {
                    $scope.email = {};
                    $scope.email.tipo = $scope.data.tipo[0];
                };
            }
        ],
            templateUrl: 'Sections/contato.html'
        };
}]);
