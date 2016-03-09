shiratSite.controller('home', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $rootScope.showMainVideo = function(){
		$rootScope.showMainVideo =true
	}
	 $rootScope.closeMainVideo = function(){
		$rootScope.showMainVideo =false
	}
} ]);