var myAngularData = angular.module("myApp", ["ngRoute", "appControllers"]);

var appControllers = angular.module("appControllers", []);

myAngularData.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/login", {
      templateUrl: "views/login.html"
    });
}]);
