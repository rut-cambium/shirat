shiratSite.controller('lesson', ['$rootScope', '$scope', '$stateParams','$state','$timeout', function ($rootScope, $scope,$stateParams, $state,$timeout) {
   
  $scope.lessonId =$stateParams.lesId;
  $scope.lesType =$stateParams.lesType;

  $.ajax({
		  url:  $rootScope.domain+'get_post&post_id='+$scope.lessonId+'&post_type='+$scope.lesType
	
		}).done(function(data) {
		 var x =data
		  },0)

} ]);


//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
//$scope.domain+"?json=shirat.getravs()&posttype=audio",