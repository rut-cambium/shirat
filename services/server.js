shiratSite.factory('server', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {


    return {

        sendAjax: function (type,data) {

            // self = this; //for functions of localStorage

            var deferred = $q.defer();

            //var resFromStorage = self.getStorage(data);

            //if (resFromStorage) {
            //    //if the data is trip summary mission -call to server and not take from storage
            //    if (resFromStorage.res && resFromStorage.res.type == 'tripSummary') {
            //    }
            //    else {
            //        deferred.resolve(resFromStorage);
            //        return deferred.promise;
            //    }

            //}
            //http://www.shirat.org.il/?json=shirat.getravs()&dev=1
            var httpDetails = {
                url: domain+"?json="+type,
                method: "POST",
                data: data,
                contentType: "application/json"
            };

            //if (!data.req) {//if it form data
            //    httpDetails.transformRequest = angular.identity;
            //    httpDetails.headers = { 'Content-Type': undefined };
            //    httpDetails.contentType = undefined;
            //}

            $http(httpDetails).
            success(function (json) {
                var z;
                console.log(json);
            }).
            error(function (err) {
                var x;
                console.log(json);
            });
            return deferred.promise;



 //           
 //$.ajax({
 //           type: 'GET',
 //           data:{
 //               ravname:'etrogh',
 //               posttype:'audio',
 //               lessontype:'emuna'
 //           },
 //           url: domain + "?json=shiart.getravs&dev=1",
 //           dataType: 'json',
 //           success: function (data) {
 //               if (callback)
	//				console.log(data)
 //                   callback(data);
 //           },
 //           error: function (e) {
 //               ////////console.log(e.message);
 //               callback(new ErrorHandler(0)); //sends an error handler
 //           }
 //       });	
        }
    }
} ]);