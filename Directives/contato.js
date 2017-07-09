angular.module('App').directive("contato", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function ContatoController($scope, DataService) {

        }],
        templateUrl : 'Sections/contato.html'
    };
}]);
