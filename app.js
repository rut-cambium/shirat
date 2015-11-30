var shiratSite= angular.module('shiratSite', ['ui.router'])

/**** UI Router ****/
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
		
        .state("home", {
            url: "/home",
            views: {
                "main": {
                    templateUrl: "components/home/home.html",
                    controller: "home"
                }
            }
        })
        .state("about", {
            url: "/about",
            views: {
                "main": {
                    templateUrl: "components/about/about.html",
                    controller: "about"
                }
            }
        })
        .state("aboutMidrasha", {
            url: "/aboutMidrasha",
            views: {
                "main": {
                    templateUrl: "components/aboutMidrasha/aboutMidrasha.html",
                    controller: "aboutMidrasha"
                }
            }
        })
        .state("info", {
            url: "/info",
            views: {
                "main": {
                    templateUrl: "components/info/info.html",
                    controller: "info"
                }
            }

        })
         .state("way", {
            url: "/way",
            views: {
                "main": {
                    templateUrl: "components/way/way.html",
                    controller: "way"
                }
            }

        })

        
        
        
});



shiratSite.run(function ($rootScope,$state) {
   state = $state
});
var domain = 'http://www.shirat.org.il/'
function sendAjax(){

 $.ajax({
            type: 'GET',
            data:{
                ravname:'etrogh',
                posttype:'audio',
                lessontype:'emuna'
            },
            url: domain + "?json=shiart.getravs&dev=1",
            dataType: 'json',
            success: function (data) {
                if (callback)
					console.log(data)
                    callback(data);
            },
            error: function (e) {
                ////////console.log(e.message);
                callback(new ErrorHandler(0)); //sends an error handler
            }
        });	
		//http://www.shirat.org.il/?json=shirat.getravs()&ravname=etrog&posttype=audio&lessontype=emuna&dev=1
}
