/**
 * Created by pcjoshi on 3/3/15.
 */

angular.module('hello',[])
    .controller('home', function($scope,$http){
    $http.get('/resource/').success(function(data){
        $scope.greeting = data;
    })
});