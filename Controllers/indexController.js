angular.module('App').controller('indexController', ['$scope', 'DataService', function ($scope, DataService) {

    $scope.dataService = DataService;

    DataService.getData();

    $scope.teste = 'teste';

    
}]);
