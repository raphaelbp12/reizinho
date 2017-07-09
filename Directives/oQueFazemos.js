angular.module('App').directive("oQueFazemos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function OQueFazemosController($scope, DataService) {

        }],
        template : "<div id='oQueFazemos'>Text: {{data.text}}</div>"
    };
}]);