angular.module('App').directive("menu", ['DataService', 'Common', function (DataService, Common) {
    return {
        scope: {
            data: '=',
            general: '='
        },
        controller: ['$scope', 'DataService', 'Common', 'ModalService', function NossasBandasController($scope, DataService, Common, ModalService) {

          $scope.activeMenu = {home:true};
          $scope.offsetToDetect = 70;

          $(document).ready(function() {
            var menuBarItems = $('.navbar-nav li').not( document.getElementById( "logo" ));
            menuBarItems.addClass("li-not-scrolled");

            function checkScroll() {
                var startY = $('.navbar').height() * 0.1; //The point where the navbar changes in px
                var contatoelem = document.getElementById("contato");

                var contatoY = $(contatoelem).offset().top;
                if ($(window).scrollTop() > startY && ($(window).scrollTop() < contatoY) ) {
                    $('.navbar').addClass("scrolled");
                    menuBarItems.removeClass("li-not-scrolled");
                } else {
                    $('.navbar').removeClass("scrolled");
                    menuBarItems.addClass("li-not-scrolled");
                }
            }

            $('.nav a').on('click', function(){
                $('.btn-navbar').click(); //bootstrap 2.x
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });



            if ($('.navbar').length > 0) {
                $(window).on("scroll load resize", function () {
                    var newActiveMenu = {}
                    checkScroll();
                    newActiveMenu.home = isScrolledIntoViewById('slider');
                    $scope.data.forEach(function(item,index){
                      if (isScrolledIntoViewById(item.post_name)){
                        $scope.data.forEach(function(item,index){
                          newActiveMenu[item.post_name] = false;
                          newActiveMenu.home = false;
                        });
                        newActiveMenu[item.post_name] = true;
                      }

                    });

                    //Home - imagem


                    $scope.changeActiveMenu(newActiveMenu);
                });
            }

          });

          $scope.changeSelected = function (item) {
            $scope.itemSelected = item;
          }

          $scope.changeActiveMenu = function (newActiveMenu) {
              $scope.$apply(function () {
                  if ((Object.values(newActiveMenu).indexOf(true) > -1)) {
                    $scope.activeMenu = newActiveMenu;
                    $scope.changeSelected(Object.keys(newActiveMenu)[Object.values(newActiveMenu).indexOf(true)]);
                  }
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

                  // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));\
                  return (elemTop <= (docViewTop + $scope.offsetToDetect));
              } else {
                  return false;
              }
          }




        }],
        templateUrl: 'Sections/menu.html'
    };
}]);
