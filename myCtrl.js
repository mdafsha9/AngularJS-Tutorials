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
