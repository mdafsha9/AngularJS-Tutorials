var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
  $scope.name="John Doe";
  $scope.fname= "John";

  $scope.items=["Apple", "Orange", "Grapes", "Pine-apple"];
  
});
