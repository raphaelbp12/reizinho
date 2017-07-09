angular.module('App').directive("quemSomos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function QuemSomosController($scope, DataService) {
        }],
        templateUrl : 'Sections/quemSomos.html'
    };
}]);
