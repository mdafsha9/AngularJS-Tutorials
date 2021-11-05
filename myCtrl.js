app.controller("myCtrl", function($scope){
  $scope.firstName = " ";
  $scope.lastName = " ";
})

//for Directives
//invoke a directive using element name, attribute,class
app1.directive("w3TestDirective", function(){
  return{
    restrict : "M",
    replace : true,
    template : "<h3>made a directive</h3>"
  };
});

//for data Binding
app2.controller("myCtrl1", function($scope){
  $scope.firstName = "John";
  $scope.lastName = "Hue";
})

//for Scope
app3.run(function($rootScope){
  $rootScope.color = "red";
});
app3.controller("myCtrlSc", function($scope){
  $scope.color = "blue";
});

//for Filters
app4.controller("myCtrlFi", function($scope){
  $scope.employees = [
    {firstName:'Lorie', lastName:'Wright', country:'USA', price:25},
    {firstName:'Black', lastName:'Doe', country:'UK', price:40},
    {firstName:'Cathy', lastName:'Krumm', country:'Paris', price:55},
    {firstName:'Carly', lastName:'Jue', country:'Germany', price:45},
    {firstName:'Royal', lastName:'Roman', country:'Russia', price:31}];
});
