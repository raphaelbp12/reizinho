angular.module('App').directive("quemSomos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', '$window', function QuemSomosController($scope, DataService, $window) {
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

            $scope.openLink = function(link) {
              $window.open(link);
            };
        }],
        templateUrl : 'Sections/quemSomos.html'
    };
}]);
