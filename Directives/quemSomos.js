angular.module('App').directive("quemSomos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common',  function QuemSomosController($scope, DataService, Common) {
            $scope.missaoCtrl = false;
            $scope.valoresCtrl = false;
            $scope.visaoCtrl = false;
            $scope.common = Common;

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
