var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
  $scope.name="John Doe";
  $scope.fname= "John";

  $scope.items=["Apple", "Orange", "Grapes", "Pine-apple"];
  $scope.names=[{name:'Afsha', age:31},{name:'Raghava', age:31},{name:'Isha', age:2}];
});
