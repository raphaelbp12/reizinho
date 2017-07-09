angular.module('App').directive("slider", ['DataService', function(DataService) {
    return {
        scope: {
            data: '='
        },
        controller: ['$scope', 'DataService', function SliderController($scope, DataService) {
            $scope.calcURL = function(path, filename){
                return DataService.WPURL + path + "/" + filename;
            }
        }],
        template : "<div ng-repeat='item in data'><img src='{{calcURL(item.path, item.filename)}}' /></div>"
    };
}]);