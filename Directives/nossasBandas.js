angular.module('App').directive("nossasBandas", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function NossasBandasController($scope, DataService) {
            $scope.galleries = [];

            $scope.calcURL = function(path, filename){
                return DataService.WPURL + path + "/" + filename;
            };

            $scope.calcGalleries = function(images){
                images.forEach(function (image, indexImage) {
                    var foundGallery = false;
                    $scope.galleries.forEach(function (gallery, indexGallery) {
                        if(gallery.name === image.title){
                            foundGallery = true;
                            $scope.galleries[indexGallery].images.push({
                                gallery: image.title,
                                url: $scope.calcURL(image.path, image.filename),
                                description: image.description,
                                alttext: image.alttext
                            });
                        }
                    });
                    if(!foundGallery){
                        $scope.galleries.push({
                            name: image.title,
                            images: [{
                                gallery: image.title,
                                url: $scope.calcURL(image.path, image.filename),
                                description: image.description,
                                alttext: image.alttext
                            }]
                        });
                    }
                })

                console.log("$scope.galleries", $scope.galleries);
            };

            $scope.calcGalleries($scope.data.galerias);

        }],
        template : "<div><div ng-repeat='gallery in galleries'><h1>{{gallery.name}}</h1><img ng-repeat='image in gallery.images' src='{{image.url}}'></div> </div>"
    };
}]);