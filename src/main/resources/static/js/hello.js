/**
 * Created by pcjoshi on 3/3/15.
 */


angular.module('hello',['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when("/",{
			templateUrl: "home.html",
			controller: "home"
		}).when('/login',{
			templateUrl:"login.html",
			controller:"navigation"
		}).otherwise('/');
	})
    .controller('home', function($scope,$http){
    $http.get('/resource/').success(function(data){
        $scope.greeting = data;
    })
})
.controller('navigation',
    function($rootScope,$scope,$http,$location){
        var authenticate = function(callback){
            $http.get('user').success(function(data){
                if(data.name){
                    $rootScope.authenticated = true;
                }else{
                    $rootScope.authenticated =false;
                }
                callback && callback();
            }).error(function () {
                $rootScope.authenticated = false;
                callback && callback();
            });
        }

        $scope.logout = function(){
            $http.post('logout',{}).success(function () {
                $rootScope.authenticated = false;
                $location.path("/");
            }).error(function(data){
                $rootScope.authenticated = false;
            });
        }

        authenticate();

        $scope.credentials={};

        $scope.login = function(){
            $http.post('login', $.param($scope.credentials),{
                headers:{
                    "content-type" : "application/x-www-form-urlencoded"
                }
            }).success(function (data) {
                authenticate(function () {
                    if($rootScope.authenticated) {
                        console.log("login succeeded");
                        $location.path("/");
                        $scope.error = false;
                        $rootScope.authenticated = true;
                    }else{
                        $location.path("/login");
                        $scope.error = true;
                        $rootScope.authenticated = false;
                    }
                });
            }).error(function (data) {
                console.log("Error while logging in !! " + data );
                $location.path("/login");
                $scope.error = true;
                $rootScope.authenticated = false;
            })
        };
    });