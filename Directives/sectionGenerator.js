angular.module('App').directive('sectionGenerator', ['$compile', function($compile) {
    return {
        scope: {
            section: '=',
            general: '='
        },
        link: function(scope, element) {
            element.append($compile('<div '+scope.section.tipo+' data="section.data" general="general"></div>')(scope));
        }
    };
}]);
