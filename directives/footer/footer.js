shiratSite.directive('footer', ['$state', '$rootScope', function ($state, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: './directives/footer/footer.html',
        link: function (scope, el, attrs) {
          

        },
        replace: true
    };


} ]);

