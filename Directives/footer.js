angular.module('App').directive("footer", ['DataService', 'Common', function (DataService, Common) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common', function FooterController($scope, DataService, Common) {
            $scope.common = Common;
        }],
        templateUrl: 'Sections/footer.html'
    };
}]);
