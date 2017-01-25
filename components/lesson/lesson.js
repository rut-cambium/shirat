shiratSite.controller('lesson', ['$rootScope', '$scope', '$stateParams', '$state', '$timeout', '$sce', function ($rootScope, $scope, $stateParams, $state, $timeout, $sce) {

	$scope.trustSrc = function(src) {
           return $sce.trustAsResourceUrl(src);
        }
       


    $scope.lessonId = $stateParams.lesId;
    $scope.lesType = $stateParams.lesType;

    $.ajax({
        url: $rootScope.domain + 'get_post&post_id=' + $scope.lessonId + '&post_type=' + $scope.lesType

    }).done(function (data) {
        var x = data;
        switch ($scope.lesType) {
            case "video":
                var ytLink = data.post.custom_fields["wpcf-youtube-link"][0];

                var video_id = ytLink;
                //var ampersandPosition = video_id.indexOf('v=');
                //if(ampersandPosition != -1) {
                //  video_id = video_id.substring(0, ampersandPosition);
                //}
                //
                $timeout(function () {
                    $scope.videourl = "https://www.youtube.com/embed/" + video_id + "?autoplay=1"
                }, 0)

                // $scope.videourl =$sce.trustAsResourceUrl("https://www.youtube.com/embed/"+video_id+"?autoplay=1")
                break;

            case "audio":
             $timeout(function () {
                     $scope.audiourl = data.post.custom_fields["wpcf-file"][0];
                }, 0)
               

                break;
                case "read":
             $timeout(function () {
                 $scope.articleLessonContent = $sce.trustAsHtml(data.post.custom_fields["wpcf-content"][0].replace(/(?:\r\n|\r|\n)/g, '<br />'))
                }, 0)
               

                break;

        }
    })

} ]);


//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
//$scope.domain+"?json=shirat.getravs()&posttype=audio",