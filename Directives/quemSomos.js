angular.module('App').directive("quemSomos", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function QuemSomosController($scope, DataService) {
        }],
        template : "<div>Missao: {{data.missao}} Text: {{data.text}} Valores: {{data.valores}} Visao: {{data.visao}}</div>"
    };
}]);