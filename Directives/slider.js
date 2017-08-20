angular.module('App').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

angular.module('App').directive("slider", ['DataService', 'Common',  function (DataService, Common) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', 'Common','$window', '$sce' , function SliderController($scope, DataService, Common, $window, $sce) {
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

            $scope.config = {
                sources: [
                  {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"}
                ],
                theme: "node_modules/videogular-themes-default/videogular.css"
              };

            $scope.APIS_STATE = [];
            $scope.onPlayerReady = function(API, index) {
            $scope.APIS_STATE[index] = API;
            }

            
            $scope.changeState = function(index){
            if(videoPlaying()) {
                $('#slider').slick('slickPause');
            } else {
                $('#slider').slick('slickPlay');
            }
            }

            var videoPlaying = function (){
            var isPlaying = false;
            $scope.APIS_STATE.forEach(function (API) {
                if(API.currentState == 'play') {
                isPlaying = true;
                return;
                } 
            });
            return isPlaying;
            }


            $scope.openLink = function(link) {
              if(link && link != '') $window.open(link);
            };
        }],
        templateUrl: 'Sections/slider.html'
    };
}]);
