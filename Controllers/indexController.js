angular.module('App').controller('indexController', ['$scope', 'DataService', function ($scope, DataService) {

    $scope.dataService = DataService;

    DataService.getData();

    $scope.teste = 'teste';

    $scope.activeMenu = {};

    $scope.changeActiveMenu = function (newActiveMenu) {
        $scope.activeMenu = newActiveMenu;

        console.log('$scope.activeMenu', $scope.activeMenu);
    };

    function isScrolledIntoViewById(id) {
        var elem = document.getElementById(id);

        if (elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        } else {
            return false;
        }
    }

    function checkScroll() {
        var startY = $('.navbar').height() * 0.1; //The point where the navbar changes in px

        if ($(window).scrollTop() > startY) {
            $('.navbar').addClass("scrolled");
        } else {
            $('.navbar').removeClass("scrolled");
        }
    }

    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function () {
            var newActiveMenu = {}
            checkScroll();
            newActiveMenu.slider = isScrolledIntoViewById('slider');
            newActiveMenu.quemSomos = isScrolledIntoViewById('quemSomos');
            newActiveMenu.nossasBandas = isScrolledIntoViewById('nossasBandas');
            newActiveMenu.oQueFazemos = isScrolledIntoViewById('oQueFazemos');
            newActiveMenu.contato = isScrolledIntoViewById('contato');

            $scope.changeActiveMenu(newActiveMenu);
        });
    }
}]);