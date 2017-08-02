angular.module('App').directive("quemSomos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function QuemSomosController($scope, DataService) {
            $scope.missaoCtrl = false;
            $scope.valoresCtrl = false;
            $scope.visaoCtrl = false;

            $scope.toggleMissao = function () {
                $scope.missaoCtrl = !$scope.missaoCtrl;
            };

            $scope.toggleValores = function () {
                $scope.valoresCtrl = !$scope.valoresCtrl;
            };

            $scope.toggleVisao = function () {
                $scope.visaoCtrl = !$scope.visaoCtrl;
            };
        }],
        templateUrl : 'Sections/quemSomos.html'
    };
}]);
