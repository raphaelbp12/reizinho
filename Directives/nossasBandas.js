angular.module('App').directive("nossasBandas", ['DataService', 'Common' , function(DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common' , function NossasBandasController($scope, DataService, Common) {
            $scope.galleries_nossasBandas = [];
            Common.calcGalleries($scope.data.galerias, $scope.galleries_nossasBandas);

        }],
        templateUrl : 'Sections/nossasBandas.html'
    };
}]);
