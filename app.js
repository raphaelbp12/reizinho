/**
 * Created by raphaelbp12 on 7/7/2017.
 */
var App = angular.module('App', ['restangular']);

App.controller('indexController', function($scope, Restangular){
    $scope.teste = 'teste';
});

