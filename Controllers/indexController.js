angular.module('App').controller('indexController', ['$scope', 'DataService', function ($scope, DataService) {

    $scope.dataService = DataService;

    DataService.getData();

    $scope.teste = 'teste';


    //anchor smooth effect
    $(document).on('click', 'a', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });

}]);
