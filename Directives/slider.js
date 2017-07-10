angular.module('App').directive("slider", ['DataService', 'Common', function(DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common', function SliderController($scope, DataService, Common) {
            $scope.calcURL = Common.calcURL;
            $(document).ready(function () {
                 $('#slider').slick({
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "autoplay": true,
                    "autoplaySpeed": 500,
                    "dots": true,
                    "dotsClass": 'full-width-slider-dots'
                });
            });
        }],
        templateUrl : 'Sections/slider.html'
    };
}]);
