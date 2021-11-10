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

//custom filters
app4.filter("reverse", function( ){
  return function(text){
      text = text || " ";
      var out = " ";
      for(var i=text.length-1; i>=0; i--){
        out += text[i];
      }
      return out;
  };
});

//for service current location
app5.controller("myCtrlLoc", function($scope, $location){
  $scope.myUrl = $location.absUrl();
});

//creating our own service
app6.service("myServ", function($http){
  this.squareOfNumbers = function(x){
    return x * x;
  }
});
app6.controller("myCtrlOwn", function($scope, myServ){
  $scope.getResult = myServ.squareOfNumbers(10);
});

//for factory services
app7.factory("myFactory", function(){
  var obj = {};
  obj.getName = function(){
    return "Hello Geetha!";
  }
  obj.getCity = function(){
    return "Guntur";
  }
  return obj;
})
app7.controller("myCtrlFa", function($scope, myFactory){
  $scope.myName = myFactory.getName();
  $scope.myCity = myFactory.getCity();
})

//for $timeout services
app8.controller("myCtrlTime", function($scope, $timeout){
  $scope.msz = "Services"
  $timeout(function(){
    $scope.msz="Timeout Services";
  }, 1000);
});
