shiratSite.controller('library', ['$rootScope', '$scope', '$state','$timeout', function ($rootScope, $scope, $state,$timeout) {
   $scope.domain ="http://www.shirat.org.il/";
   $scope.lessonsArr =[]
   $scope.getAllLessons = function(){
	   $.ajax({
		  url:  $scope.domain+'?json=get_recent_posts&post_type=read',
	
		}).done(function(data) {
		  
		  $timeout(function(){
			    $scope.lessonsArr = data.posts;
		  },0)
		  console.log($scope.lessonsArr);
		});
   }
   $scope.getAllLessons()
} ]);


//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
//$scope.domain+"?json=shirat.getravs()&posttype=audio",