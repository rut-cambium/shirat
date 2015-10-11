shiratSite.directive('menu', ['$state', '$rootScope', function ($state, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: './directives/menu/menu.html',
        link: function (scope, el, attrs) {
            scope.state = $state;

        },
        replace: true
    };


} ]);

