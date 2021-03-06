angular.module("App").directive("imageonload", [ '$compile', function ($compile) {
  return {
    restrict: "A",
    scope: {
        general: '=',
        activeTitle:'=',
        galleryTitle: '='
    },
    link: function (scope, element, attributes) {
      if(attributes.imageonload){
        element.css({ backgroundImage: 'url("' + attributes.imageonload + '")' });
        var el = angular.element('<div class="div-loading"></div>');
        el.css({ backgroundImage: 'url("' + scope.general.spinner + '")' });
        $compile(el)(scope);
        element.append(el);
        var image = new Image();
        image.onload = function () {
          var divLoading = element.find('div.div-loading')
          divLoading.remove();
          if(scope.activeTitle){
            var el = angular.element('<div class="title-galeria-fazemos">'+ scope.galleryTitle +'</div>');
            $compile(el)(scope);
            element.append(el);            
          }
          // console.log(divLoading);
          // scope.$apply(function () {
          //   element.css({ backgroundImage: 'url("' + attributes.imageonload + '")' });
          // });
        };
        image.src = attributes.imageonload;
      }      
    }
  };
}]);
