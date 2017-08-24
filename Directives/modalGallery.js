angular.module('App').directive("modalGalleryBandas", [function() {
    return {
        scope: {
            show: '=',
            gallery: '=',
            imageIndex: '='
        },
        controller: ['$scope', function ModalGalleryController($scope) {
            $scope.triggerOpacity = true;
            $scope.modalId = Math.floor((Math.random() * 1000) + 1);

            $scope.closeModal = function () {
                $scope.show = false;
            };

            $scope.oldGallery = {};

            $scope.teste = function(e, that){
                console.log('event', e, that);
                //if(e.currentTarget === 'div#553.ac-modal.active')
            }

            $(document).ready(function () {

                $('#modalGalleryBandas').slick({
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "dots": true,
                    "dotsClass": 'directive-modal-gallery-dots slick-dots'
                });

                $scope.gallery.images.forEach(function (image, imageIndex) {
                    $('#modalGalleryBandas').slick('slickAdd',"<div id='"+imageIndex+"' class='directive-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
                });

                $scope.oldGallery = $scope.gallery;

                $scope.$watch('gallery', function () {
                    $scope.oldGallery.images.forEach(function (image, imageIndex) {
                        $('#modalGalleryBandas').slick('slickRemove',0);
                    });

                    $scope.gallery.images.forEach(function (image, imageIndex) {
                        $('#modalGalleryBandas').slick('slickAdd',"<div id='"+imageIndex+"' class='directive-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
                    });


                    $scope.oldGallery = $scope.gallery;
                });

                $scope.$watch('show', function () {
                    if($scope.show){
                        setTimeout(function(){$('#modalGalleryBandas').slick('slickGoTo', $scope.imageIndex, true);}, 10);
                    }
                })
            });
        }],
        templateUrl : 'Templates/modalGalleryBandas.html',
        link: function($scope, $element, $attrs, ctrl) {

            $scope.clickOutsideModal = function(e){
                //console.log('event1', e, $element, e.target === $element[0].firstElementChild);
                if(e.target === $element[0].firstElementChild){
                    $scope.closeModal();
                }
            }
        }
    };
}]);


angular.module('App').directive("modalGalleryFazemos", [function() {
    return {
        scope: {
            show: '=',
            gallery: '=',
            imageIndex: '='
        },
        controller: ['$scope', function ModalGalleryController($scope) {
            $scope.triggerOpacity = true;
            $scope.modalId = Math.floor((Math.random() * 1000) + 1);

            $scope.closeModal = function () {
                $scope.show = false;
            };

            $scope.oldGallery = {};

            $scope.teste = function(e, that){
                console.log('event', e, that);
                //if(e.currentTarget === 'div#553.ac-modal.active')
            }

            $(document).ready(function () {

                $('#modalGalleryFazemos').slick({
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "dots": true,
                    "dotsClass": 'directive-modal-gallery-dots slick-dots'
                });

                $scope.gallery.images.forEach(function (image, imageIndex) {
                    $('#modalGalleryFazemos').slick('slickAdd',"<div id='"+imageIndex+"' class='directive-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
                });

                $scope.oldGallery = $scope.gallery;

                $scope.$watch('gallery', function () {
                    $scope.oldGallery.images.forEach(function (image, imageIndex) {
                        $('#modalGalleryFazemos').slick('slickRemove',0);
                    });

                    $scope.gallery.images.forEach(function (image, imageIndex) {
                        $('#modalGalleryFazemos').slick('slickAdd',"<div id='"+imageIndex+"' class='directive-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
                    });


                    $scope.oldGallery = $scope.gallery;
                });

                $scope.$watch('show', function () {
                    if($scope.show){
                        setTimeout(function(){$('#modalGalleryFazemos').slick('slickGoTo', $scope.imageIndex, true);}, 10);
                    }
                })
            });
        }],
        templateUrl : 'Templates/modalGalleryFazemos.html',
        link: function($scope, $element, $attrs, ctrl) {

            $scope.clickOutsideModal = function(e){
                //console.log('event1', e, $element, e.target === $element[0].firstElementChild);
                if(e.target === $element[0].firstElementChild){
                    $scope.closeModal();
                }
            }
        }
    };
}]);