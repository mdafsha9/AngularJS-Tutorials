app.controller("myCtrl", function($scope){
  $scope.firstName = " ";
  $scope.lastName = " ";
})

//for Directives
//invoke a directive using element name, attribute,class
app1.directive("w3TestDirective", function(){
  return{
    restrict : "C",
    template : "<h3>made a directive</h3>"
  };
});
