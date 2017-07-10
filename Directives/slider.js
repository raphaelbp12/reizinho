angular.module('App').directive("slider", ['DataService', 'Common', function(DataService, Common) {
    return {
        scope: {
            data: '='
        },
<<<<<<< HEAD
        controller: ['$scope', 'DataService', 'Common', function SliderController($scope, DataService, Common) {
            $scope.calcURL = Common.calcURL;
            $(document).ready(function () {
                 $('#slider').slick({
=======
        controller: ['$scope', 'DataService', function SliderController($scope, DataService) {
            $scope.calcURL = function(path, filename){
                return DataService.WPURL + path + "/" + filename;
            }

            $(document).ready(function () {
                $('#slider').slick({
>>>>>>> 70cda1b0329c0c0371476c882df185ffa7f43108
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
<<<<<<< HEAD
        templateUrl : 'Sections/slider.html'
=======
        template : "<div id='slider'><div class='slider-item' ng-repeat='item in data' style='background-image: url({{calcURL(item.path, item.filename)}})'></div></div>"
>>>>>>> 70cda1b0329c0c0371476c882df185ffa7f43108
    };
}]);
