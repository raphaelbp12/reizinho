angular.module('App').directive('sectionGenerator', ['$compile', function($compile) {
    return {
        scope: {
            section: '='
        },
        link: function(scope, element) {
            element.append($compile('<div '+scope.section.tipo+' data="section.data"></div>')(scope));
        }
    };
}]);