angular.module('App').directive("oQueFazemos", ['DataService', 'Common', function(DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope','DataService','Common', function OQueFazemosController($scope, DataService, Common) {
          $scope.galleries_oQueFazemos = [];
          Common.calcGalleries($scope.data.galerias, $scope.galleries_oQueFazemos);

          $scope.gallerySelected = $scope.galleries_oQueFazemos[0];

          $scope.changeGallery = function (id) {
                  $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                      $('#galeria-oQueFazemos').slick('slickRemove',0);
                  });

                  $scope.gallerySelected = $scope.galleries_oQueFazemos[id];

                  $scope.gallerySelected.images.forEach(function (image, imageIndex) {
                      $('#galeria-oQueFazemos').slick('slickAdd',"<div  class='oQueFazemos-gallery-item' style='background-image: url("+image.url+")'></div>");
                  });
          };


          $(document).ready(function (){
            $('#galeria-oQueFazemos').slick({
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows": true,
                "autoplay": true,
                "autoplaySpeed": 500,
                "dots": true
            });
            $scope.changeGallery(0);
          });

        }],
        templateUrl : 'Sections/oQueFazemos.html'
    };
}]);
