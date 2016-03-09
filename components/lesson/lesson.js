shiratSite.controller('lesson', ['$rootScope', '$scope', '$stateParams','$state','$timeout','$sce', function ($rootScope, $scope,$stateParams, $state,$timeout,$sce) {
   
  $scope.lessonId =$stateParams.lesId;
  $scope.lesType =$stateParams.lesType;

  $.ajax({
		  url:  $rootScope.domain+'get_post&post_id='+$scope.lessonId+'&post_type='+$scope.lesType
	
		}).done(function(data) {
		 var x =data;
		 switch($scope.lesType){
			 case "video":
			 var ytLink = data.post.custom_fields["wpcf-youtube-link"][0];
			 
			 var video_id = ytLink;
				var ampersandPosition = video_id.indexOf('&');
				if(ampersandPosition != -1) {
				  video_id = video_id.substring(0, ampersandPosition);
				}
			 
			 $scope.videourl =$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+video_id+"?autoplay=1")
			 break;
			 
		 }
		  },0)

} ]);


//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
//$scope.domain+"?json=shirat.getravs()&posttype=audio",