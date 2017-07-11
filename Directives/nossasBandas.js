angular.module('App').directive("nossasBandas", ['DataService', 'Common', function (DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common', function NossasBandasController($scope, DataService, Common) {
            $scope.galleries_nossasBandas = [];
            Common.calcGalleries($scope.data.galerias, $scope.galleries_nossasBandas);

            $scope.gallerySelected = $scope.galleries_nossasBandas[0];

            $scope.changeGallery = function (id) {
                if ($scope.galleries_nossasBandas[id].id != $scope.gallerySelected.id) {
                    $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                        $('#galeria-nossasBandas').slick('slickRemove',0);
                    });

                    $scope.gallerySelected = $scope.galleries_nossasBandas[id];

                    $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                        $('#galeria-nossasBandas').slick('slickAdd',"<div  class='nossasBandas-gallery-item' style='background-image: url("+image.url+")'></div>");
                    });
                }
            };

            $(document).ready(function (){
              $('#galeria-nossasBandas').slick({
                  "slidesToShow": 3,
                  "slidesToScroll": 3,
                  "arrows": true,
                  "autoplay": true,
                  "autoplaySpeed": 500,
                  "dots": true
              });
              console.log($('#galeria-nossasBandas'));
              $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                  $('#galeria-nossasBandas').slick('slickAdd',"<div  class='nossasBandas-gallery-item' style='background-image: url("+image.url+")'></div>");
              });
            });

        }],
        templateUrl: 'Sections/nossasBandas.html'
    };
}]);
