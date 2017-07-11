angular.module('App').directive("modalGallery", [function() {
    return {
        scope: {
            show: '=',
            gallery: '=',
            imageIndex: '='
        },
        controller: ['$scope', function ModalGalleryController($scope) {
            $scope.triggerOpacity = true;
            $scope.closeModal = function () {
                $scope.show = false;
            };

            $scope.oldGallery = {};

            $(document).ready(function () {

                $('#modalGallery').slick({
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "dots": true,
                    "dotsClass": 'directive-modal-gallery-dots slick-dots'
                });

                $scope.gallery.images.forEach(function (image, imageIndex) {
                    $('#modalGallery').slick('slickAdd',"<div id='"+imageIndex+"' class='directive-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
                });

                $scope.oldGallery = $scope.gallery;

                $scope.$watch('gallery', function () {
                    $scope.oldGallery.images.forEach(function (image, imageIndex) {
                        $('#modalGallery').slick('slickRemove',0);
                    });

                    $scope.gallery.images.forEach(function (image, imageIndex) {
                        $('#modalGallery').slick('slickAdd',"<div id='"+imageIndex+"' class='directive-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
                    });


                    $scope.oldGallery = $scope.gallery;
                });

                $scope.$watch('show', function () {
                    if($scope.show){
                        setTimeout(function(){$('#modalGallery').slick('slickGoTo', $scope.imageIndex, true);}, 10);
                    }
                })
            });
        }],
        templateUrl : 'Templates/modalGallery.html'
    };
}]);