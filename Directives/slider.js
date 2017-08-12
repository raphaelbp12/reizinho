angular.module('App').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

angular.module('App').directive("slider", ['DataService', 'Common',  function (DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common','$window', function SliderController($scope, DataService, Common, $window) {
            $scope.calcURL = Common.calcURL;
            $scope.common = Common;
            $(document).ready(function () {
                $('#slider').slick({
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "arrows": true,
                    "autoplay": true,
                    "autoplaySpeed": 7000,
                    "dots": true,
                    "dotsClass": 'full-width-slider-dots',
                    "pauseOnHover": true,
                    "pauseOnDotsHover": true
                });
            });


            $scope.openLink = function(link) {
              if(link && link != '') $window.open(link);
            };
        }],
        templateUrl: 'Sections/slider.html'
    };
}]);
