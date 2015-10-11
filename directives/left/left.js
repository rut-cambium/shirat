shiratSite.directive('left', ['$state', '$rootScope', function ($state, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: './directives/left/left.html',
        link: function (scope, el, attrs) {
         

        },
        replace: true
    };


} ]);

