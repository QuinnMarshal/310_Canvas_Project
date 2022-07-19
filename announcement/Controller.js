var m=angular.module('MyApp',[])
m.controller('HelloController',function($scope){
    $scope.greeting = {text: 'hello'};
});
 function HelloController($scope){
     $scope.greeting = {text: 'hello'};
 };

//grab the list from http request later on
var announcements = [{name:'A1', message:'hi'},
{name:'A2', message:'hi'}, 
{name:'A3', message:'hi'}, ]
var announceChange = {name:'a1', message:'e'}

function announce($scope){
    $scope.announcements=announcements;
    $scope.deleted=function(index){
        $scope.announcements.splice(index, 1)
    }
    $scope.announceChange=announceChange;
    $scope.showCreate=true;
    $scope.add=function(index){
        //$scope.showCreate = true;
        $scope.announcements.push({name:announceChange.name, message:announceChange.message})
    }
}

