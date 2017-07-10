angular.module('App').directive("nossasBandas", ['DataService', 'Common' , function(DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common' , function NossasBandasController($scope, DataService, Common) {
            $scope.galleries_nossasBandas = [];
            Common.calcGalleries($scope.data.galerias, $scope.galleries_nossasBandas);


            $scope.gallerySelected = $scope.galleries_nossasBandas[0];

            $scope.changeGallery = function (id){
              if ($scope.galleries_nossasBandas[id].id != $scope.gallerySelected.id){
                $scope.gallerySelected = $scope.galleries_nossasBandas[id];
              }
            }

        }],
        templateUrl : 'Sections/nossasBandas.html'
    };
}]);
