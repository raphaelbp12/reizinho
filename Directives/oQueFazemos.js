angular.module('App').directive("oQueFazemos", ['DataService', 'Common', '$timeout', function(DataService, Common, $timeout) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope','DataService','Common', '$sce', 'ModalService', function OQueFazemosController($scope, DataService, Common, $sce, ModalService) {
          $scope.galleries_oQueFazemos = [];
          $scope.common = Common;
          Common.calcGalleries($scope.data.galerias, $scope.galleries_oQueFazemos);
          $scope.gallerySelected = {};

          
          $scope.modalShow = false;
          $scope.modalImageIndex = 1;
          
          $scope.slickGaleriasConfig = {
                    "slidesToShow": 7,
                    "slidesToScroll": 7,
                    "arrows": true,
                    "autoplay": false,
                    "dots": true,
                    responsive: [
                    ],
              method: {},
              event: {
                  beforeChange: function (event, slick, currentSlide, nextSlide) {
                  },
                  afterChange: function (event, slick, currentSlide, nextSlide) {
                  }
              }
          };

          $scope.slickFazemosConfig = {
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
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
          
          $scope.showModal = function(index) {
            $scope.modalImageIndex = index;
            $scope.modalShow = true;
        };

          $scope.$watch(
            function () {
                return $scope.gallerySelected;
            },
            function (newValue, oldValue) {
                if (!angular.equals(oldValue, newValue)) {                 
                  if($scope.videosLoaded){
                    $scope.slickFazemosConfig.slidesToShow = 1;
                    $scope.slickFazemosConfig.slidesToScroll =  1;
                    //992
                    $scope.slickFazemosConfig.responsive[0].slidesToShow = 1;
                    $scope.slickFazemosConfig.responsive[0].slidesToScroll =  1;
                  } else {
                    $scope.slickFazemosConfig.slidesToShow = (newValue.images.length >= 3) ? 3 : newValue.images.length;
                    $scope.slickFazemosConfig.slidesToScroll =  $scope.slickFazemosConfig.slidesToShow;
                    //992
                    $scope.slickFazemosConfig.responsive[0].slidesToShow = (newValue.images.length >= 1) ? 1 : newValue.images.length;
                    $scope.slickFazemosConfig.responsive[0].slidesToScroll =  $scope.slickFazemosConfig.responsive[0].slidesToShow;
                  }
                }
            },
            true);

          $scope.changeGallery = function (id) {


            $scope.galleries_oQueFazemos.forEach(function (gallery, galleryIndex) {
              $('#container-galerias-fazemos #'+gallery.id).removeClass('gallery-selected');
            });
            $('#institucional-fazemos').removeClass('gallery-selected');
            $scope.arrayLoaded = false;
            $scope.videosLoaded = false;

              if(id!= undefined){
                $('#container-galerias-fazemos #'+id).addClass('gallery-selected');
                $scope.gallerySelected= angular.copy( $scope.galleries_oQueFazemos[id]) ;
              } else {
                $('#institucional-fazemos').addClass('gallery-selected');
                $scope.gallerySelected = {}
                $scope.gallerySelected.images = angular.copy($scope.data.videos);
                $scope.videosLoaded = true;
                
              }

              $timeout(function(){
                $scope.arrayLoaded = true;
              },500);
                  
          };


          var videos = [];
          $scope.data.videos.forEach(function(video) {
            var src = [{
              src: $sce.trustAsResourceUrl(video.url),
              type: "video/mp4"
            }];

            videos.push(src)
          });

          $scope.config = {
            sources: videos,
            theme: "node_modules/videogular-themes-default/videogular.css"
          };

          $scope.APIS_STATE = [];
          $scope.onPlayerReady = function(API, index) {
            $scope.APIS_STATE[index] = API;
          }

          
          $scope.changeState = function(state,index){
            $scope.APIS_STATE[index].currentState = state;
            if(videoPlaying()) {
              $('#galeria-oQueFazemos').slick('slickPause');
            } else {
              $('#galeria-oQueFazemos').slick('slickPlay');
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


          $(document).ready(function (){
            // $('#galeria-oQueFazemos').slick({
            //     "slidesToShow": 3,
            //     "slidesToScroll": 3,
            //     "arrows": true,
            //     "autoplay": true,
            //     "autoplaySpeed": 500,
            //     "dots": true
            // });
            $scope.changeGallery(0);
          });

        }],
        templateUrl : 'Sections/oQueFazemos.html'
    };
}]);
