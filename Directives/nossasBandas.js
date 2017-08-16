angular.module('App').directive("nossasBandas", ['DataService', 'Common', '$timeout', function (DataService, Common, $timeout) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common', 'ModalService', function NossasBandasController($scope, DataService, Common, ModalService) {
            $scope.galleries_nossasBandas = [];
            $scope.common = Common;
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
                          breakpoint: 992,
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

            $scope.gallerySelected = $scope.galleries_nossasBandas[1];
            

            $scope.$watch(
              function () {
                  return $scope.gallerySelected;
              },
              function (newValue, oldValue) {
                  if (!angular.equals(oldValue, newValue)) {
                    console.log('newVar', newValue)
                    $scope.slickBandasConfig.slidesToShow = (newValue.images.length >= 5) ? 5 : newValue.images.length;
                    $scope.slickBandasConfig.slidesToScroll =  $scope.slickBandasConfig.slidesToShow;
                    //992
                    $scope.slickBandasConfig.responsive[0].slidesToShow = (newValue.images.length >= 3) ? 3 : newValue.images.length;
                    $scope.slickBandasConfig.responsive[0].slidesToScroll =  $scope.slickBandasConfig.responsive[0].slidesToShow;
                    // //600
                    // $scope.slickBandasConfig.responsive[1].slidesToShow = (newValue.images.length >= 2) ? 2 : newValue.images.length;
                    // $scope.slickBandasConfig.responsive[1].slidesToScroll =  $scope.slickBandasConfig.responsive[1].slidesToShow;
                    // //480
                    // $scope.slickBandasConfig.responsive[2].slidesToShow = (newValue.images.length >= 1) ? 1 : newValue.images.length;
                    // $scope.slickBandasConfig.responsive[2].slidesToScroll =  $scope.slickBandasConfig.responsive[2].slidesToShow;
                  }
              },
              true);

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

            // $scope.gallerySelected = $scope.galleries_nossasBandas[0];
            // console.log('nossasbandas', $scope.galleries_nossasBandas)
            // $scope.arrayLoaded = false;
            $scope.changeGallery = function (id) {

                      $scope.galleries_nossasBandas.forEach(function (gallery, galleryIndex) {
                        $('#container-galerias #'+gallery.id).removeClass('gallery-selected');
                      });
                      $('#container-galerias #institucional').removeClass('gallery-selected');

                      $scope.arrayLoaded = false;
                      $scope.videosLoaded = false;

                      if( (id != undefined)) {
                        $('#container-galerias #'+id).addClass('gallery-selected');
                        $scope.gallerySelected = $scope.galleries_nossasBandas[id] ;
                      }else {
                        $('#container-galerias #institucional').addClass('gallery-selected');
                        $scope.gallerySelected.images = $scope.data.videos;
                        $scope.videosLoaded = true;
                      }
                      $timeout(function(){
                       $scope.arrayLoaded = true;

                     },500);




            };

            $scope.showModal = function(index) {
                $scope.modalImageIndex = index;
                $scope.modalShow = true;
            };

            $(document).ready(function () {
              $scope.changeGallery(0);
            });

        }],
        templateUrl: 'Sections/nossasBandas.html'
    };
}]);
