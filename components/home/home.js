shiratSite.controller('home', ['$rootScope', '$scope', '$state', 'server', function ($rootScope, $scope, $state, server) {
    server.sendAjax('shirat.getravs()',{
                ravname:'etrogh',
                posttype:'audio',
                lessontype:'emuna'
            });
} ]);