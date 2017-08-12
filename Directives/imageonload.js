angular.module("App").directive("imageonload", [ '$compile', function ($compile) {
  return {
    restrict: "A",
    scope: {
        general: '='
    },
    link: function (scope, element, attributes) {
      element.css({ backgroundImage: 'url("' + attributes.imageonload + '")' });
      var el = angular.element('<div class="div-loading"></div>');
      el.css({ backgroundImage: 'url("' + scope.general.spinner + '")' });
      $compile(el)(scope);
      element.append(el);
      var image = new Image();
      console.log('carregando')
      image.onload = function () {
        var divLoading = element.find('div')
        divLoading.remove();
        // console.log(divLoading);
        // scope.$apply(function () {
        //   element.css({ backgroundImage: 'url("' + attributes.imageonload + '")' });
        // });
      };
      image.src = attributes.imageonload;
    }
  };
}]);
