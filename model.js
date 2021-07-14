var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
  $scope.name="John Doe";
  $scope.fname= "John";

  $scope.items=["Apple", "Orange", "Grapes", "Pine-apple"];
  $scope.names=[{name:'Afsha', age:31},{name:'Raghava', age:31},{name:'Isha', age:2}];
  $scope.namings=["Element Name(E)", "Attribute(A)", "Class(C)", "Comment(M)"];

});


app.directive("testDirective", function(){
  return{
    template:"<h3>Custom DirectiveType-1:</h3><p>Invoking a directive by using Element Name</p>"
  };
});
app.directive("test1Directive", function(){
  return{
    template:"<h3>Custom Directive Type-2</h3><p>Invoking a directive by using Attribute</p>"
  };
});
