var domain = "http://www.shirat.org.il/";
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
         .state("share", {
            url: "/share",
            views: {
                "main": {
                    templateUrl: "components/share/share.html",
                    controller: "share"
                }
            }

        })
        .state("gallery", {
            url: "/gallery",
            views: {
                "main": {
                    templateUrl: "components/gallery/gallery.html",
                    controller: "gallery"
                }
            }

        })

        
        
        
});



shiratSite.run(function ($rootScope,$state) {
   state = $state
});

