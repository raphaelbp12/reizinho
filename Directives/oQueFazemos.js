angular.module('App').directive("oQueFazemos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function OQueFazemosController($scope, DataService) {

        }],
        templateUrl : 'Sections/oQueFazemos.html'
    };
}]);
