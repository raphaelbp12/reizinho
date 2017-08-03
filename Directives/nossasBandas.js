angular.module('App').directive("nossasBandas", ['DataService', 'Common', function (DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common', 'ModalService', function NossasBandasController($scope, DataService, Common, ModalService) {
            $scope.galleries_nossasBandas = [];
            Common.calcGalleries($scope.data.galerias, $scope.galleries_nossasBandas);

            $scope.modalShow = false;
            $scope.modalImageIndex = 1;

            $scope.gallerySelected = $scope.galleries_nossasBandas[0];

            $scope.changeGallery = function (id) {
                    $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                        $('#galeria-nossasBandas').slick('slickRemove',0);
                    });

                    $scope.gallerySelected = $scope.galleries_nossasBandas[id];

                    $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                        $('#galeria-nossasBandas').slick('slickAdd',"<div id='"+imageIndex+"'  class='nossasBandas-gallery-item' style='background-image: url("+image.url+")'></div>");
                    });

                    $('.nossasBandas-gallery-item').click(function (e) {
                        console.log('click item', e.target.id);
                        $scope.$apply(function () {
                            $scope.showModal(e.target.id);
                        });
                    });
            };


            $scope.showModal = function(index) {
                $scope.modalImageIndex = index;
                $scope.modalShow = true;
            };

            $(document).ready(function () {
                $('#galeria-nossasBandas').slick({
                    "slidesToShow": 5,
                    "slidesToScroll": 5,
                    "arrows": true,
                    "autoplay": true,
                    "autoplaySpeed": 500,
                    "dots": true,
                    "responsive": [
                      {
                        breakpoint: 1366,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4
                        }
                      },
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                      // You can unslick at a given breakpoint now by adding:
                      // settings: "unslick"
                      // instead of a settings object
                    ]
                });

                $scope.changeGallery(0);
            });

        }],
        templateUrl: 'Sections/nossasBandas.html'
    };
}]);
