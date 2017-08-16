angular.module('App').directive("oQueFazemos", ['DataService', 'Common', '$timeout', function(DataService, Common, $timeout) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope','DataService','Common', function OQueFazemosController($scope, DataService, Common) {
          $scope.galleries_oQueFazemos = [];
          Common.calcGalleries($scope.data.galerias, $scope.galleries_oQueFazemos);

          $scope.gallerySelected = $scope.galleries_oQueFazemos[0];
          console.log($scope.gallerySelected);

          $scope.slickGaleriasConfig = {
                    "slidesToShow": 7,
                    "slidesToScroll": 7,
                    "arrows": true,
                    "autoplay": false,
                    "dots": true,
                    responsive: [
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3
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

          $scope.changeGallery = function (id) {
                  // $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                  //     // $('#galeria-oQueFazemos').slick('slickRemove',0);
                  // });
                  //
                  // $scope.gallerySelected = $scope.galleries_oQueFazemos[id];
                  //
                  // $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                  //     // $('#galeria-oQueFazemos').slick('slickAdd',"<div  class='oQueFazemos-gallery-item' style='background-image: url("+image.url_thumb+")'></div>");
                  // });

                  $scope.galleries_oQueFazemos.forEach(function (gallery, galleryIndex) {
                    $('#container-galerias-fazemos #'+gallery.id).removeClass('gallery-selected');
                  });

                  console.log(id)
                  $scope.arrayLoaded = false;

                  $('#container-galerias-fazemos #'+id).addClass('gallery-selected');
                  $scope.gallerySelected = $scope.galleries_oQueFazemos[id] ;
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
            $scope.changeGallery(0);
          });

        }],
        templateUrl : 'Sections/oQueFazemos.html'
    };
}]);
