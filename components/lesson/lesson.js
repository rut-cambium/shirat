shiratSite.controller('lesson', ['$rootScope', '$scope', '$state','$timeout', function ($rootScope, $scope, $state,$timeout) {
   $scope.domain ="http://www.shirat.org.il/";
  
} ]);


//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
//$scope.domain+"?json=shirat.getravs()&posttype=audio",