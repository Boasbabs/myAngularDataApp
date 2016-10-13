myAngularData.controller("RegistrationController", ["$scope", function($scope) {
  $scope.login = function() {
    alert($scope.user.email);
  }// login submission is called here
}]);// RegistrationController for registration
