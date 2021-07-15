var app = angular.module("myApp1", []);
app.controller("myCtrl", function($scope){
  $scope.name = "John Doe";
});
app.controller("myCtrl", function($scope){
  $scope.ctrlLists = ["Data binding in AngularJS is synchronization between the model and the view",
  "AngularJS application usually have a data model. A data model is a collection of data available for the application",
  "The HTML container where the AngularJS application is displayed is called a view"]
})
