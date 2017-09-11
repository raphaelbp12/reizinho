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

            console.log($scope.data)

            var videos = [];
            $scope.data.videos.forEach(function(video) {
              var src = [{
                src: $sce.trustAsResourceUrl(video.url),
                type: "video/mp4"
              }];
  
              videos.push(src)
            });

            $scope.config = {
                sources:videos,
                theme: "node_modules/videogular-themes-default/videogular.css"
              };

            $scope.APIS_STATE = [];
            $scope.onPlayerReady = function(API, index) {
                API.setVolume(0);
                $scope.APIS_STATE[index] = API;
            }

            
            $scope.changeState = function(state,index){
                $scope.APIS_STATE[index].currentState = state;
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
