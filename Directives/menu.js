angular.module('App').directive("menu", ['DataService', 'Common', function (DataService, Common) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common', 'ModalService', function NossasBandasController($scope, DataService, Common, ModalService) {

          $scope.activeMenu = {};

          $(document).ready(function() {
            var menuBarItems = $('.navbar-nav li').not( document.getElementById( "logo" ));
            menuBarItems.addClass("li-not-scrolled");

            function checkScroll() {
                var startY = $('.navbar').height() * 0.1; //The point where the navbar changes in px

                if ($(window).scrollTop() > startY) {
                    $('.navbar').addClass("scrolled");
                    menuBarItems.removeClass("li-not-scrolled");
                } else {
                    $('.navbar').removeClass("scrolled");
                    menuBarItems.addClass("li-not-scrolled");
                }
            }



            if ($('.navbar').length > 0) {
                $(window).on("scroll load resize", function () {
                    var newActiveMenu = {}
                    checkScroll();
                    $scope.data.forEach(function(item){
                      newActiveMenu[item.post_name] = isScrolledIntoViewById(item.post_name);
                    });

                    //Home - imagem
                    newActiveMenu.home = isScrolledIntoViewById('slider');

                    $scope.changeActiveMenu(newActiveMenu);
                    console.log(newActiveMenu)
                });
            }

          });


          $scope.changeActiveMenu = function (newActiveMenu) {
              $scope.$apply(function () {
                  $scope.activeMenu = (Object.values(newActiveMenu).indexOf(true) > -1) ? newActiveMenu : $scope.activeMenu ;
              });

              //console.log('$scope.activeMenu', $scope.activeMenu);
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




        }],
        templateUrl: 'Sections/menu.html'
    };
}]);
