shiratSite.directive('right', ['$state', '$rootScope', function ($state, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: './directives/right/right.html',
        link: function (scope, el, attrs) {
            scope.state = $state;

        },
        replace: true
    };


} ]);

