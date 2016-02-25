shiratSite.controller('gallery', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $scope.galleryList = ["gal1.jpg", "gal2.jpg", "gal3.jpg", "gal4.jpg", "gal5.jpg", "gal6.jpg", "gal7.jpg", "gal8.jpg", "gal9.jpg"];
    $scope.activeIndex = 0;
    $scope.switchImg = function (index) {
        $scope.activeIndex = index;
    }

    $scope.scrollLeft = function () {
        var leftPos = $('.gallery-list-inner').scrollLeft();
        $(".gallery-list-inner").animate({ scrollLeft: leftPos - 200 }, 800);
    }
      $scope.scrollRight = function () {
        var leftPos = $('.gallery-list-inner').scrollLeft();
        $(".gallery-list-inner").animate({ scrollLeft: leftPos + 200 }, 800);
    }
} ]);