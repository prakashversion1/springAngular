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
.controller('navigation',function(){})