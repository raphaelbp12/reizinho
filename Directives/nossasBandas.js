angular.module('App').directive("nossasBandas", ['DataService', 'Common', '$timeout', function (DataService, Common, $timeout) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common', 'ModalService', function NossasBandasController($scope, DataService, Common, ModalService) {
            $scope.galleries_nossasBandas = [];
            Common.calcGalleries($scope.data.galerias, $scope.galleries_nossasBandas);

            $scope.modalShow = false;
            $scope.modalImageIndex = 1;

            $scope.slickBandasConfig = {
                      "slidesToShow": 5,
                      "slidesToScroll": 5,
                      "arrows": true,
                      "autoplay": true,
                      "autoplaySpeed": 2000,
                      "dots": true,
                      responsive: [
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
                      ],
                method: {},
                event: {
                    beforeChange: function (event, slick, currentSlide, nextSlide) {
                    },
                    afterChange: function (event, slick, currentSlide, nextSlide) {
                    }
                }
            };

            $scope.slickGaleriasConfig = {
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "arrows": true,
                "infinite": false,
                "autoplay": false,
                "dots": false,
                responsive: [
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
                ],
                method: {},
                event: {
                    beforeChange: function (event, slick, currentSlide, nextSlide) {
                    },
                    afterChange: function (event, slick, currentSlide, nextSlide) {
                    }
                }
            };

            $scope.gallerySelected = $scope.galleries_nossasBandas[0];
            $scope.arrayLoaded = true;
            $scope.changeGallery = function (id) {

                    $scope.galleries_nossasBandas.forEach(function (gallery, galleryIndex) {
                      $('#container-galerias #'+gallery.id).removeClass('gallery-selected');
                    });
                    $('#container-galerias #'+id).addClass('gallery-selected');


                    $scope.arrayLoaded = false;
                    $scope.gallerySelected = $scope.galleries_nossasBandas[id];
                    $timeout(function(){
                     $scope.arrayLoaded = true;
                   },500);


            };


            $scope.showModal = function(index) {
                $scope.modalImageIndex = index;
                $scope.modalShow = true;
            };

            $(document).ready(function () {
            //     $('#galeria-nossasBandas').slick({
            //         "slidesToShow": 5,
            //         "slidesToScroll": 5,
            //         "arrows": true,
            //         "autoplay": true,
            //         "autoplaySpeed": 2000,
            //         "dots": true,
            //         responsive: [
            //           {
            //             breakpoint: 1024,
            //             settings: {
            //               slidesToShow: 3,
            //               slidesToScroll: 3
            //             }
            //           },
            //           {
            //             breakpoint: 600,
            //             settings: {
            //               slidesToShow: 2,
            //               slidesToScroll: 2
            //             }
            //           },
            //           {
            //             breakpoint: 480,
            //             settings: {
            //               slidesToShow: 1,
            //               slidesToScroll: 1
            //             }
            //           }
            //         ]
            //     });

                // $('#container-galerias').slick({
                //     "slidesToShow": 3,
                //     "slidesToScroll": 1,
                //     "arrows": true,
                //     "autoplay": false,
                //     "dots": true,
                //     responsive: [
                //       {
                //         breakpoint: 600,
                //         settings: {
                //           slidesToShow: 2,
                //           slidesToScroll: 2
                //         }
                //       },
                //       {
                //         breakpoint: 480,
                //         settings: {
                //           slidesToShow: 1,
                //           slidesToScroll: 1
                //         }
                //       }
                //     ]
                // });

                $scope.changeGallery(0);
            });

        }],
        templateUrl: 'Sections/nossasBandas.html'
    };
}]);
