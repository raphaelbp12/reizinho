/**
 * Created by raphaelbp12 on 7/7/2017.
 */
var App = angular.module('App', ['restangular']);

App.controller('indexController', ['$scope', 'DataService', function($scope, DataService){
    DataService.getData();

    $scope.teste = 'teste';
}]);

angular.module('App').factory('DataRest', ['$q', 'Restangular', function ($q, Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('http://34.229.154.187/');
    });
}]);

angular.module('App').service('DataService', ['DataRest', function (DataRest) {

    var self = this;

    self.getData = function () {
        //console.log("twitch called");
        DataRest.all('data').getList().then(function(response) {
            console.log("response", response);
        });
    };
}]);