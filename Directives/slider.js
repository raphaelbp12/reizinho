angular.module('App').directive("slider", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function SliderController($scope, DataService) {
            $scope.calcURL = function(path, filename){
                return DataService.WPURL + path + "/" + filename;
            }

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
        template : "<div id='slider'><div class='slider-item' ng-repeat='item in data' style='background-image: url({{calcURL(item.path, item.filename)}})'></div></div>"
    };
}]);