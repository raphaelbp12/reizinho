angular.module('App').directive("contato", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function ContatoController($scope, DataService) {

        }],
        template : "<div id='contato'>Text: {{data.text}}</div>"
    };
}]);