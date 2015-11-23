module.exports = angular.module('Directives', [])
    .directive("clickButton", [function() {
        return {
            restrict: "A",
            replace: true,
            template: "<button>Click</button>",
            link: function(scope, elem, attrs) {
                elem.on('click', function(e) {
                    e.preventDefault();
                    console.log(scope);
                });
            }
        };
    }]);