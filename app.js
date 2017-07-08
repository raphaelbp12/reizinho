/**
 * Created by raphaelbp12 on 7/7/2017.
 */
var App = angular.module('App', ['restangular']);

App.controller('indexController', ['$scope', 'DataService', function($scope, DataService){

    DataService.getData();

    $scope.teste = 'teste';
}]);

angular.module('App').service('DataService', ['$http', function ($http) {

    var self = this;

    self.getData = function () {
        //console.log("twitch called");
        $http({
            method: "GET",
            url: "http://34.229.92.175/data/",
            headers: {'Content-Type': 'application/json;'}
        }).then(function(restsData) {
            console.log("response", restsData.data.data);
        });
    };
}]);