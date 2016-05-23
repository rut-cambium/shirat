shiratSite.controller('home', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $rootScope.showMainVideoFunc = function(){
		$rootScope.showMainVideo =true
	}
	 $rootScope.closeMainVideo = function(){
		$rootScope.showMainVideo =false
	}
} ]);