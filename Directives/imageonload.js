angular.module("App").directive("imageonload", [function () {
  return {
    restrict: "A",
    scope: {
        general: '='
    },
    link: function (scope, element, attributes) {
      element.css({ backgroundImage: 'url("' + scope.general.spinner + '")' });
      var image = new Image();
      console.log('carregando')
      image.onload = function () {
        console.log('carregado');
        scope.$apply(function () {
          element.css({ backgroundImage: 'url("' + attributes.imageonload + '")' });
        });
      };
      image.src = attributes.imageonload;
    }
  };
}]);
