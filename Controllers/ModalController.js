angular.module('App').controller('ModalController', ['$scope', 'close', 'Common', function($scope, close, Common) {


    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

    $(document).ready(function () {

        debugger;

        var iDiv = document.createElement('div');
        iDiv.className = 'galeriaModal';
        iDiv.id = 'block'+Math.floor((Math.random()*10000)+1);

        document.getElementById('modalGallery').appendChild(iDiv);

        $('#'+iDiv.id).slick({
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": true,
            "autoplay": false,
            "autoplaySpeed": 500,
            "dots": true
        });

        Common.modalSelectedGallery.images.forEach(function (image, imageIndex) {
            $('#'+iDiv.id).slick('slickAdd',"<div id='"+imageIndex+"' class='nossasBandas-modal-gallery-item' style='background-image: url("+image.url+")'></div>");
        });

        Common.modalAlreadyOpened = true;
    });

}]);