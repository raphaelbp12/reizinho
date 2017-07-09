angular.module('App').directive('sectionGenerator', function($compile) {
    return {
        scope: {
            section: '='
        },
        link: function(scope, element) {
            element.append($compile('<div '+scope.section.tipo+' data="section.data"></div>')(scope));
        }
    };
});