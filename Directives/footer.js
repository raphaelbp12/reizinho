angular.module('App').directive("footer", ['DataService', 'Common', function(DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope','DataService','Common', function FooterController($scope, DataService, Common) {

        }],
        templateUrl : 'Sections/footer.html'
    };
}]);
