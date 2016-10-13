myAngularData.controller("RegistrationController", ["$scope", "$location", function($scope, $location) {
  $scope.login = function() {
    $location.path("/meetings");
  }// login submission is called here
}]);// RegistrationController for registration
