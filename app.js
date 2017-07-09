/**
 * Created by raphaelbp12 on 7/7/2017.
 */
var App = angular.module('App', ['restangular']);

angular.module('App').controller('indexController', ['$scope', 'DataService', function($scope, DataService){

    $scope.dataService = DataService;

    DataService.getData();

    $scope.teste = 'teste';
}]);