var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
  $scope.name="John Doe";
  $scope.fname= "John";

  $scope.items=["Apple", "Orange", "Grapes", "Pine-apple"];
  $scope.names=[{name:'Afsha', age:31},{name:'Raghava', age:31},{name:'Isha', age:2}];
  $scope.namings=["Element Name(E)", "Attribute(A)", "Class(C)", "Comment(M)"];
  $scope.price = 60;
  $scope.contents=[{name:'Joy', country:'Russia'},{name:'Roy', country:'Australia'},{name:'Toy', country:'America'},{name:'Royal', country:'Africa'}];
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
app.directive("test2Directive", function(){
  return{
    restrict:"C",
    template:"<h3>Custom directive Type-3</h3><p>Invoking a directive by using class attribute</p>"
  };
});
app.directive("test3Directive", function(){
  return{
    restrict:"M",
    replace:true,
    template:"<h3>Custom directive Type-4</h3><p>Invoking a directive by using comment<br>Here we added a replace property, otherwise comment would be invisible</p>"
  };
});

app.run(function($rootScope){
  $rootScope.color="red";
});
app.controller("myCtrl1", function($scope){
  $scope.color="blue";
})

app.controller("myCtrl", function($scope){
  $scope.personalNames = ["Jani", "Rani", "Phani", "Mani", "Suzi", "Aaryana", "Rahul", "Sahoo", "Droona"];
})
app.filter("myFilter", function(){
  return function(input){
    return input;
  };
});
app.controller("myCtrl", function($scope){
  $scope.tutorial="AngularJS Tutorials";
});
app.service("dataShared", function(){
  return product = {name:'', price:''};
  return product;
})
app.controller("myCtrl01", function($scope, dataShared){
  $scope.product = dataShared;
})
app.controller("myCtrl02", function($scope, dataShared){
  $scope.product = dataShared;
})
