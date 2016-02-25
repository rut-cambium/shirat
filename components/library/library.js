shiratSite.controller('library', ['$rootScope', '$scope', '$state','$timeout', function ($rootScope, $scope, $state,$timeout) {
   
   $scope.lessonsArr =[];
   $scope.lessonsTypesExist=[]
   $scope.allLessonsExist =false;
   $scope.getAllLessons = function(){
	   $.ajax({
		  url:  $rootScope.domain +'get_recent_posts&post_type=audio',
	
		}).done(function(data) {
		  $scope.lessonsTypesExist['audio'] = true;
		  $timeout(function(){
			  $scope.lessonsArr = $scope.lessonsArr.concat(data.posts);
			  if ($scope.lessonsTypesExist['audio'] && $scope.lessonsTypesExist['video'] && $scope.lessonsTypesExist['read'] ){ $scope.allLessonsExist =true;}
			 //   $scope.lessonsArr = data.posts;
		  },0)
		  console.log($scope.lessonsArr);
		});
		$.ajax({
		  url:  $rootScope.domain +'get_recent_posts&post_type=read',
	
		}).done(function(data) {
		  $scope.lessonsTypesExist['read'] = true;
		  $timeout(function(){
			  $scope.lessonsArr = $scope.lessonsArr.concat(data.posts);
			  if ($scope.lessonsTypesExist['audio'] && $scope.lessonsTypesExist['video'] && $scope.lessonsTypesExist['read'] ){ $scope.allLessonsExist =true;}
			 //   $scope.lessonsArr = data.posts;
		  },0)
		  console.log($scope.lessonsArr);
		});
		$.ajax({
		  url:  $rootScope.domain +'get_recent_posts&post_type=video',
	
		}).done(function(data) {
		  $scope.lessonsTypesExist['video'] = true;
		  $timeout(function(){
			  $scope.lessonsArr = $scope.lessonsArr.concat(data.posts);
			  if ($scope.lessonsTypesExist['audio'] && $scope.lessonsTypesExist['video'] && $scope.lessonsTypesExist['read'] ){ $scope.allLessonsExist =true;}
			 //   $scope.lessonsArr = data.posts;
		  },0)
		  console.log($scope.lessonsArr);
		});
   }
   $scope.getAllLessons()
    $scope.lessonClick =function(lessonData){
	   $state.transitionTo('lesson',{lesId:lessonData.id,lesType:lessonData.type})
   }
} ]);


//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
//$scope.domain+"?json=shirat.getravs()&posttype=audio",