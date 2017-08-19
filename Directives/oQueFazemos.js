angular.module('App').directive("oQueFazemos", ['DataService', 'Common', '$timeout', function(DataService, Common, $timeout) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope','DataService','Common', function OQueFazemosController($scope, DataService, Common) {
          $scope.galleries_oQueFazemos = [];
          $scope.common = Common;
          Common.calcGalleries($scope.data.galerias, $scope.galleries_oQueFazemos);
          console.log($scope.gallerySelected);
          $scope.gallerySelected = {};
          
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
                    "autoplay": false,
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
                    $scope.slickFazemosConfig.slidesToShow = 1;
                    $scope.slickFazemosConfig.slidesToScroll =  1;
                    //992
                    $scope.slickFazemosConfig.responsive[0].slidesToShow = 1;
                    $scope.slickFazemosConfig.responsive[0].slidesToScroll =  1;
                  } else {
                    $scope.slickFazemosConfig.slidesToShow = (newValue.images.length >= 3) ? 3 : newValue.images.length;
                    $scope.slickFazemosConfig.slidesToScroll =  $scope.slickBandasConfig.slidesToShow;
                    //992
                    $scope.slickFazemosConfig.responsive[0].slidesToShow = (newValue.images.length >= 1) ? 1 : newValue.images.length;
                    $scope.slickFazemosConfig.responsive[0].slidesToScroll =  $scope.slickBandasConfig.responsive[0].slidesToShow;
                  }
                }
            },
            true);

          $scope.changeGallery = function (id) {


            $scope.galleries_oQueFazemos.forEach(function (gallery, galleryIndex) {
              $('#container-galerias-fazemos #'+gallery.id).removeClass('gallery-selected');
            });
            $('#container-galerias-fazemos #institucional').removeClass('gallery-selected');
            $scope.arrayLoaded = false;
            $scope.videosLoaded = false;

              if(id!= undefined){
                $('#container-galerias-fazemos #'+id).addClass('gallery-selected');
                $scope.gallerySelected= angular.copy( $scope.galleries_oQueFazemos[id]) ;
              } else {
                $('#container-galerias-fazemos #institucional').addClass('gallery-selected');
                $scope.gallerySelected.images = angular.copy($scope.data.videos);
                $scope.videosLoaded = true;
              }

              $timeout(function(){
                $scope.arrayLoaded = true;
              },500);
                  
          };


          $(document).ready(function (){
            // $('#galeria-oQueFazemos').slick({
            //     "slidesToShow": 3,
            //     "slidesToScroll": 3,
            //     "arrows": true,
            //     "autoplay": true,
            //     "autoplaySpeed": 500,
            //     "dots": true
            // });
            $scope.changeGallery();
          });

        }],
        templateUrl : 'Sections/oQueFazemos.html'
    };
}]);
