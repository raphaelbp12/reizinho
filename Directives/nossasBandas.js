angular.module('App').directive("nossasBandas", ['DataService', 'Common', '$timeout', function (DataService, Common, $timeout) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common', 'ModalService', '$sce', function NossasBandasController($scope, DataService, Common, ModalService, $sce) {
            $scope.galleries_nossasBandas = [];
            $scope.common = Common;
            Common.calcGalleries($scope.data.galerias, $scope.galleries_nossasBandas);
            $scope.gallerySelected = {};

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

            $scope.$watch(
              function () {
                  return $scope.gallerySelected;
              },
              function (newValue, oldValue) {
                  if (!angular.equals(oldValue, newValue)) {                 
                    if($scope.videosLoaded){
                      $scope.slickBandasConfig.slidesToShow = 1;
                      $scope.slickBandasConfig.slidesToScroll =  1;
                      //992
                      $scope.slickBandasConfig.responsive[0].slidesToShow = 1;
                      $scope.slickBandasConfig.responsive[0].slidesToScroll =  1;
                    } else {
                      $scope.slickBandasConfig.slidesToShow = (newValue.images.length >= 5) ? 5 : newValue.images.length;
                      $scope.slickBandasConfig.slidesToScroll =  $scope.slickBandasConfig.slidesToShow;
                      //992
                      $scope.slickBandasConfig.responsive[0].slidesToShow = (newValue.images.length >= 1) ? 1 : newValue.images.length;
                      $scope.slickBandasConfig.responsive[0].slidesToScroll =  $scope.slickBandasConfig.responsive[0].slidesToShow;
                    }
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
                        $scope.gallerySelected = angular.copy($scope.galleries_nossasBandas[id]) ;
                      }else {
                        $('#container-galerias #institucional').addClass('gallery-selected');
                        $scope.gallerySelected = {}
                        $scope.gallerySelected.images = angular.copy($scope.data.videos);
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


            $scope.config = {
              sources: [
                {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"}
              ],
              theme: "node_modules/videogular-themes-default/videogular.css"
            };

            $scope.APIS_STATE = [];
            $scope.onPlayerReady = function(API, index) {
              $scope.APIS_STATE[index] = API;
            }
  
            
            $scope.changeState = function(state,index){
              $scope.APIS_STATE[index].currentState = state;
              if(videoPlaying()) {
                $('#galeria-nossasBandas').slick('slickPause');
              } else {
                $('#galeria-nossasBandas').slick('slickPlay');
              }
            }

  
            var videoPlaying = function (){
              var isPlaying = false;
              $scope.APIS_STATE.forEach(function (API) {
                if(API.currentState == 'play') {
                  isPlaying = true;
                  return;
                } 
              });
              return isPlaying;
            }
  

            $(document).ready(function () {
              $scope.changeGallery();
            });

        }],
        templateUrl: 'Sections/nossasBandas.html'
    };
}]);
